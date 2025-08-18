import arxiv
import json
import os
from typing import List, Dict
from mcp.server.fastmcp import FastMCP

PAPER_DIR = "papers"
os.makedirs(PAPER_DIR, exist_ok=True)

# Initialize FastMCP server
mcp = FastMCP("research")

@mcp.tool()
async def search_papers(topic: str, max_results: int = 5) -> List[str]:
    """
    Search for papers on arXiv based on a topic and store their information.
    
    Args:
        topic: The topic to search for
        max_results: Maximum number of results to retrieve (default: 5)
        
    Returns:
        List of paper IDs found in the search
    """
    client = arxiv.Client()
    search = arxiv.Search(
        query=topic,
        max_results=max_results,
        sort_by=arxiv.SortCriterion.Relevance
    )
    
    path = os.path.join(PAPER_DIR, topic.lower().replace(" ", "_"))
    os.makedirs(path, exist_ok=True)
    file_path = os.path.join(path, "papers_info.json")
    
    try:
        with open(file_path, "r") as f:
            papers_info = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        papers_info = {}
    
    paper_ids = []
    for paper in client.results(search):
        paper_id = paper.get_short_id()
        paper_ids.append(paper_id)
        papers_info[paper_id] = {
            'title': paper.title,
            'authors': [author.name for author in paper.authors],
            'summary': paper.summary,
            'pdf_url': paper.pdf_url,
            'published': str(paper.published.date())
        }
    
    with open(file_path, "w") as f:
        json.dump(papers_info, f, indent=2)
    
    return {
        "content": json.dumps({
            "paper_ids": paper_ids,
            "save_location": file_path
        }, indent=2)
    }

@mcp.tool()
async def extract_info(paper_id: str) -> Dict:
    """
    Get information about a specific paper.
    
    Args:
        paper_id: The paper ID to look for
        
    Returns:
        Dictionary with paper information if found, error message if not
    """
    for item in os.listdir(PAPER_DIR):
        item_path = os.path.join(PAPER_DIR, item)
        if os.path.isdir(item_path):
            file_path = os.path.join(item_path, "papers_info.json")
            if os.path.isfile(file_path):
                try:
                    with open(file_path, "r") as f:
                        papers_info = json.load(f)
                        if paper_id in papers_info:
                            return {
                                "content": json.dumps(papers_info[paper_id], indent=2)
                            }
                except (FileNotFoundError, json.JSONDecodeError) as e:
                    continue
    
    return {
        "content": f"No information found for paper {paper_id}"
    }

if __name__ == "__main__":
    mcp.run(transport='stdio')