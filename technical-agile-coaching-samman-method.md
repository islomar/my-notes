# Technical Agile Coaching with the Samman method

- Author: Emily Bache
- Version read: 2021-04-07
- https://leanpub.com/techagilecoach
- https://www.sammancoaching.org/
- The suggested hashtag for this book is #coachingsamman

**Table of Contents**

- [Foreword](#foreword)
- [Introduction](#Introduction)
- [Part 1: Ensemble Working](#part-1-ensemble-working)
- [Part 2: Learning hours](#part-2-learning-hours)
- [Part 3: Samman Coaching Engagements](#part-3-samman-coaching-engagements)
- [Interesting links](#interesting-links)

## Foreword

- SW development is a learning process.
- Learning works best together.
- Learning is best experienced episodically.

## Introduction

- One hour each day (**"Learning Hour"**) is set aside to do some practice and learn new techniques
- A Samman coach divides their time between several software development teams and there are two main parts to the method:
  - **Learning Hour**: the coach uses exercises and active learning techniques to teach the theory and practice of skills like Test-Driven Development and Refactoring.
  - **Ensemble Working**: the whole team collaborates together with the coach in applying agile development techniques in their usual production codebase.
- "Samman" means "together" in Swedish.
- **Why would an organization engage in
  Samman Technical Coaching?**
  - Good technical practices mean the organization can build new features with a shorter lead time and higher quality.
  - Skilled developers will want to work for an organization with high quality code, effective development practices and a healthy culture
  - The company needs to avoid drowning in technical debt
- **Why would you choose to coach using
  the Samman method?**
  - Life as a developer is more fun when the quality of the design and the tests is high.
  - It’s easier and faster to add functionality, please the users, meet your commitments, keep your boss happy, all of that.
  - Plus when the code is well-written and the design is flexible you’re more likely to get to introduce fun new tools and technology.
- **Elevator pitch for Samman Technical
  Coaching**
  - In order to be successful in modern development organizations, software developers need new skills. These skills are not easily learnt on a short training course or at a university. Practices like Continuous Integration and Test-Driven Development require developers to change their minute-by-minute habits and ways of working.
- **Day in the life of a Samman Technical Coach**
  - 08:00 Arrive, check messages, prepare for today’s sessions
  - 09:30 Ensemble working with first team
  - 11:30 Lunch
  - 13:00 Learning Hour with both teams
  - 14:00 Short break
  - 14:15 Ensemble working with second team
  - 16:15 Debrief, reflect, write a summary report
  - 17:00 Go home on time!
- **The purpose of Samman Coaching**
  - Development techniques
    - Better unit tests
    - Continuous Integration
    - Safe refactoring in legacy code
    - Incremental and iterative development
      - You need great automated tests and a culture of constant design improvement.
  - Levelling up a whole team together
    - Software development these days is a team sport and it doesn’t work to only train individuals. Samman coaching aims to create a whole-team culture shift.
  - Expected outcomes
    - Firstly, we aim for awareness of what good unit tests look like, what continuous integration actually is, that it’s possible to safely refactor code you don’t initially understand. Next we aim for the insight that successfully meeting deadlines and delivering high quality code means learning iterative and incremental development techniques.
    - In my experience after perhaps 10-20 coaching days most teams will have reached those insights.
    - After that, it’s about building skills and anchoring ways of working in habits and culture.
    - Measuring outcomes
      - The first thing to measure is attitudes. A simple survey should suffice to show that after the coaching developers are more enthusiastic about using these techniques. After that you expect to see improved code quality, increasing number of test cases, more frequent integration.
      - After a while of coaching you hope to see teams meeting deadlines more reliably, reductions in production bugs
      - You also need to be aware of Goodhart’s law.

## Part 1: Ensemble Working

### Ensemble Primer
- As a Samman technical coach the majority of your day is spent sitting with teams working as an ensemble.
- “All the brilliant minds working together on the same thing, at the same time, in the same space, and at the same computer - We call it ‘Mob Programming’“
- Another change is I also prefer to say “typist” instead of “driver”. I like to make it clear the person with the keyboard is not in charge of the direction the group takes.
- There are three main roles, and you rotate **roles** frequently:
  - **Typist**
    - The typist is the person who has the keyboard and mouse. You use the development tools and operate the computer. The important rule here is that you are not allowed to decide what code to write or what tests to perform.
    - The typist listens carefully to everyone present, and most particularly to the navigator.
  - **Navigator**
    - The navigator speaks for the ensemble and explains to the typist what code they should enter into the computer.
    - With a more experienced ensemble, this leadership role may not be explicitly appointed, it could simply pass fluidly between members without any formal handovers. People chip in when they have something valuable to contribute, and stay quiet otherwise.
  - **Team members**
    - The important thing is to choose carefully when and how to make the suggestion. You don’t want to distract or cause context-switching or confusion. If the typist and navigator are getting along well doing something else, wait with your comment.
    - Choosing your moment to speak and knowing when it’s better to stay silent is a really important skill.
    - it is important that every member of the ensemble should follow what’s going on. You should always feel free to ask questions so you understand the code that’s being written. Just pick your moment wisely.
- **Facilitator**: It’s worth remembering that working as an ensemble is a skill that takes some time for a group to learn. It helps to have a facilitator whose job it is to keep things working smoothly.
- Another useful role to have is **"Archivist"**. It can be helpful to have someone writing stuff down - decisions the group makes, alternatives we looked at, designs we’re following.

### Let the Ensemble give you Superpowers
- **Benefits** of programming in an ensemble:
  - Everyone understands the code
  - Skills are multiplied
  - Visitors are quickly contributors
  - Joining a smoothly functioning ensemble
  - A Coach is a Visitor with an Agenda
- Coaching Behaviours in an Ensemble
  - When you are working with a team ensemble you can help them to apply iterative and incremental development practices in their real production codebase. You can help them to write unit tests and integrate their work often.

  ### Coaching Behaviours in an Ensemble
  - [Coaching Compentency Framework](https://www.agilecoachinginstitute.com/wp-content/uploads/2011/08/Agile-Coaching-Competencies-whitepaper-part-one.pdf)
    - **Teach**
      - Don’t be afraid to pause the ensemble rotations and teach for a few minutes.
    - **Mentor**
      - Only take over the navigation if they are not making any progress, or are heading rapidly in the wrong direction.
    - **Facilitate**
      - A facilitator conducts a process without having an opinion about the content.
    - **Coach**
      - You partner with people and support them to achieve their goals. You work from the assumption that they have the answers within themselves, and your job is to help them to fulfill their promise. A key tool is the "coaching question" that evokes action without telling them what you think the action should be.
- **Observe**
  - You may not need to intervene. If the ensemble is working well, your best strategy could be to stay in the background and observe the interactions and the code that is being produced. By staying quiet for a while, you can give your whole attention to language and tone. You can get a feel for whether the rhythm of test-code-refactor is sustainable.
- **Take short breaks**
  - You do not need to be present all the time! In an ensemble session everyone should feel free to leave for a few minutes to get a coffee or fix a small errand. That applies to the coach too.
- **Retrospect**
  - When there is around 15-25 minutes left until the scheduled end of the session, I will call a halt. Preferably just after we made a commit.
  - The reason for stopping programming before the end, is to get the team to spend some time reflecting on what happened, so they can realize consciously what they have learnt
- **Breathing space between and during sessions**
  - In the middle of a 2 hour session, I usually have the whole group take a 5 minute break. Everyone benefits from a short leg stretch and opportunity to get a coffee.
  - Similarly at the end of the session I’ll make sure to finish on time or perhaps a few minutes early.
  - Make sure you have a few minutes to rest before starting something new.

### Kindness, Consideration and Respect

- Members of an ensemble should treat one another well and feel safe
to express themselves. Often an ensemble will adopt this rule: We treat everyone with kindness, consideration and respect.
- Woody's Legacy Code rule: "Honor the coder and their code. The constraints they endured are not mine to know."
- If ensemble members feel unable to uphold their working agreements then the coach should encourage the ensemble to take some **time out for everyone to calm down**. Spend 15 minutes all going to get a coffee or taking a walk around the block. Some people may take longer to return than others, that should be fine. Start with a smaller group who are all **calm enough** to work together well. You want to re-establish **trust and respect**.
- **Too much thinking at the keyboard**
  - One ensemble role that does a lot of **listening** is the typist.
  - The typist is not supposed to have their own ideas, they should be channeling the ideas from the navigator and the rest of the ensemble into the codebase.
  - The design should be spoken by the navigator before it is coded by the typist
  - The typist should hold their criticisms until they are in another role and can voice them with kindness, consideration and respect.
- **I think <name> has a good idea we should listen to**
  - Everyone in the ensemble should be listening to one another, and sometimes you get good ideas being spoken but no-one pays attention.
- **Consideration means paying attention**
  - increase the rotation speed so they end up leading the navigating more often.
  - Draw their attention back to the task in hand.
- **Call out bad behaviour that can’t wait until the retrospective**
- A useful phrase is “we don’t do that here”

### Coaching situations illustrated with stories

- What should we do now?
- Team, help your navigator
- Can we do an experiment?
- Discover scenarios
- Intention, Location, Details
- Reminder to test first
- Typist, use your shortcuts
- Consumer-First Design
- How long is it since we saw feedback?
- How long is it since we made a commit?
- Only one person knows what’s going on

### Retrospectives
- Each ensemble session should conclude with a short retrospective, about **15 minutes of a two hour session**.
- People need to decide to behave differently.
- Ask for Observations
  - Ask everyone to write observations, one per note.
  - Give the group 5 -10 minutes.
  - Read out loud, cluster, ask for clarification.
  - If you read a sticky and agree, do say so or compliment the author if it’s a good observation.
  - Be careful of disagreeing with what people have written. You don’t want to discourage people from making observations in future.
- “Liked, Learned, Lacked” Observations
- Turn up the good:
  - Go around the circle and each person says one thing that happened in the session that was good. Just a sentence or two.
- Your private retrospective
  - It can help to make a few notes in your private team diary notebook.
- Retrospective skills are essential
  - It takes time to build the habit of noticing what is going on.
  - Don’t drop the habit of retrospectives, even when the work seems to be going really well. There is always something that could be better.

### Remote Ensembles
- everyone can see everyone’s faces as well as the code
- be even more considerate with your comments
  - If you are not the navigator, you have to be even more careful about timing your comments.
  - If you want to speak, consider “raising a hand” in the videoconference software, or holding up a brightly coloured sticky note in your video feed. Be considerate and make space for others to speak.
- **take breaks**
  - At least every hour, take five minutes to get a coffee or similar.
- make it really quick to change typist, or do it less often
- **Typist lag is deadly**: typist should not experience lag from key-presses and mouse movements
- **Design discussions**: you will need additional tools for whiteboard sketches and retrospectives.

## Part 2: Learning Hours

- <https://sammancoaching.org/learning_hours/code_reading.html>
- These are short training sessions where people practice coding skills and learn new techniques. When working with a team ensemble you’re primarily a **mentor and facilitator**. In the learning hour you’re more often acting as **teacher and coach**.

### Explaining why you should hold a Learning Hour
- an organization to succeed in the modern world, it needs to be a **learning** organization.
- Learning TDD is like learning to ski
  - TDD is like parallel turns: Suddenly that straightforward bit of coding takes ten times longer. You have to shift mental balance to think about how to test the code before you can implement it. It’s disconcerting, uncomfortable.
  - If that first experience of TDD goes badly, you might be tempted to just give up.
  - Many people trying TDD will start directly in their production code. That’s a bit like attempting parallel turns on a steep slope with loose snow and moving obstacles in the form of other wobbly beginners skiing around you. What could possibly go wrong?!
- **Learn together with an instructor**
  - In the learning hour, it should be like have a fun safe skiing lesson together with friends
- Why should you spend a whole hour every day on learning?
  - If you learn skills and become better at your job, you will become more productive and happier.
  - Small increases in productivity will quickly add up to more than compensate the time you spent on the learning sessions.
  - As a software developer, learning is part of your job.
  - Another benefit of doing learning hours daily, is it makes it less likely people will miss all the training by being ill or tired one day.
- Who should come to the Learning
Hour?
  - You might have a separate learning hour for each team that you have ensemble sessions with.
  - It’s always good to throw open the invitation to learning hours more widely than only the teams you are coaching.

### The theory and practice of a teaching and learning
- Learning Outcomes and Objectives
  - part of your planning will involve finding out what people already know.
  - **Bloom’s taxonomy** (to describe learning objectives)
    - Remembering
    - Understanding
    - Applying
    - Analyzing
    - Evaluating
    - Creating
  - Example learning hour planned outcomes
    - _Describe_ some characteristics of Approval Testing.
    - _Compare_ Approval Testing with assertion-based testing.
    - _Use_ the Approvals framework to write test cases when a Printer already exists.
  - How to use Bloom categories
    - The Bloom categories help you to plan exercises and teaching materials at an appropriate level. You want to build up people’s confidence and knowledge from a good foundation. Start with materials to build Remembering, Understanding and Applying. When those thinking skills are in place, you can do more Analyzing, Evaluating and Creating.
    - If you write good descriptions of what you expect a student to be able to do after your learning hour, it can help you to choose appropriate materials and keep on topic.
- **The ‘4C’ learning model**:
  - book ‘Training from the Back of the Room’
  - The philosophy is very much that each person who comes to your learning hour has a unique background, and what they are going to learn needs to be integrated with what they already know for it to stick.
  - _Connect_: Get people in the right head-space for learning about the topic together.
  - _Concept_: Introduce the new skills or ideas or information you want the participants to learn.
  - _Concrete_: Hands-on exercises to practice skills or figure out how things work.
  - _Conclusions_: An opportunity for people to consolidate and internalize what they’ve learnt.
  - You vary the specific activities in each part to hold people’s attention and keep them moving
- **Design learning experiences that fit
with how the brain works**
  - Stronger emotions are more likely to cause long-term memories to form. Content that evokes no emotion is less likely to be remembered.
  - Physical movement improves brain performance
  - Movement trumps Sitting (move every 10-15 minutes)
  - Talking trumps Listening
  - Images trump Words
  - Writing trumps Reading
  - Shorter trumps Longer
    - Divide your presentation into 10-20 minute chunks and in between spend at least 1-2 minutes on some other activity. Perhaps ask people to review or discuss the material presented so far.
  - Different trumps Same
    - Anything new or unexpected will catch people’s attention. Emotions generally and surprise in particular help learning to stick.
    - Vary the format of your learning hours so that they are not too predictable. Games and simulations and exercises can contain built- in surprises. You can prepare code for an exercise that doesn’t behave the way people expect.
    - (Look for more ideas in the original text)
- **Deliberate practice**
  - This process of focusing on practicing one small skill at a time before composing them into a cohesive activity, is part of _deliberate practice_.
  - For example, musicians often practice playing scales: sequences of notes going up and down. They practice them first slowly then faster and faster, maintaining accurate notes and even rhythm.
  - As a teacher, I want to plan a series of learning hours that will be at just the right level so people don’t get bored, and don’t get overwhelmed or frustrated. I want to build up skills and work towards composing them into bigger skills like Test-Driven Development.

### Sample learning hours
1. Incremental working, Driven by Tests
  - Theme: small steps
  - https://sammancoaching.org/ kata_descriptions/leap_years.html
  - I like to use cyber-dojo¹¹ because it makes the red-green iterations visible.
  - Session outline:
    - 10 min Connect: divide into pairs, 3 benefits of TDD
    - 15 min Concept: Demo leap years
    - 20 min Concrete: Do Leap years in pairs
    - 10 min Conclusions: Summary of main idea
2. Selecting and ordering test cases
  - Theme: small steps
  - https://sammancoaching.org/kata_descriptions/fizzbuzz.html
  - Triangulation
    - https://www.devteams.at/red_green/2019/04/08/red_green_part_6_triangulation.html
    - As tests get more specific, production code gets more generic.
    - https://www.tddfellow.com/blog/2016/08/31/getting-stuck-while-doing-tdd-part-3-triangulation-to-the-rescue/
3. Golden Rule of TDD
  - https://sammancoaching.org/kata_descriptions/shopping_basket.html
4. Names of Refactorings, especially "Extract Function"
  - https://martinfowler.com/bliki/DefinitionOfRefactoring.html
  - https://github.com/emilybache/Tennis-Refactoring-Kata
5. Misconceptions about Refactoring
  - https://github.com/emilybache/Tennis-Refactoring-Kata
6. Make a test list
  - https://sammancoaching.org/kata_descriptions/mars_rover.html
  - https://sammancoaching.org/kata_descriptions/fractions.html
  - https://sammancoaching.org/kata_descriptions/monty_hall.html
7. Arrange - Act - Assert
8. Start with the Assertion
9. One function at a time
10. Inspirational Demo


### Learning topics
- Small steps
- Refactoring Safely
- Working with Legacy Code
- Designing Testable Code
- Designing Tests
- Double-Loop TDD
- Agile
  - [Pipeline game](https://www.eficode.com/pipeline)
    - Play online: https://pipelinegame.eficode.com/login
  - [Kanban dot game](https://livebook.manning.com/book/kanban-in-action/chapter-13/)
  - [Tasty Cupcakes](https://www.tastycupcakes.org/): games and simulations for understanding concepts like velocity, minimum viable product, self-organization etc.
- **Add your own ideas**: Use what you know and put together your own learning hours. Look through your bookshelf and technical video collection. What topics and skills have you found most useful in your career so far?


### Remote learning hours
- Cyber-dojo
- VNC:
  - I set up a Linux machine on Amazon’s EC2 with a graphical desktop running a popular IDE.
  - Everyone joins the same videoconference call, then we all use VNC to log into the machine.
- Everyone uses their local machine and screenshares
- Retrospectives

## Part 3: Samman Coaching Engagements
### Finding an Organization and Teams to Engage with
- **The department striving for Technical Excellence**
  - I spoke warmly about how working in an ensemble fosters collaboration and teamwork.
  - The one where all the really good developers wanted to work. The one with the latest technologies, the lowest bug counts, the most scalable products and the best agile teams.
- **The company struggling with defects**
  - They were spending about 50% of their developer effort on investigating and fixing defects, and only perhaps 20% on new feature development.
  - The ability to increase in new feature development and happier customers would more than pay for my consultancy fees.
- **The twenty-year-old codebase**
  - I explained how I could help the developers to gain better control over the code through refactoring and adding more unit tests.
- **Too stressed out and busy**
  - I explained what I did and they booked a (paid) half day initial workshop. I would introduce myself and I would facilitate the team doing ensemble programming on a code kata.
  - You have to be able to slow down before you can speed up.

#### Sales and Marketing principles
- Common thems from the stories above
  - your **network** is crucial, people hire people they know.
  - **listen** first to **discover** what their specific problems are
  - **adapt your pitch** for the audience and their specific problems
  - they have to be **willing to invest their time**, which can’t happen if they are too stressed out
  - your best marketing department should be your **previous customers**
- **Sales pitch**
  - Read the book's section and create my own.
  - I miss more "business value" speech.

#### The Coaching Proposal
- During the sales process, you’ll be making a **detailed proposal** to the potential client. Find a good way to convey the information to them. Perhaps a document, presentation slides or a video of you talking and sketching on a flipchart.
- Each coaching day comprises 2 hours working in an ensemble with each team, plus a learning hour.
  - Do not book more than 3 "net work hours" (breaks are important).
  - In the learning hour, we practice skills and learn theory using exercises.
  - In the ensemble sessions we usually take one of the ordinary tasks from the team backlog, and work through it together. We learn how to tackle it using new skills and techniques.
- Before the main coaching begins with a team, we hold couple of **‘kick off’ meetings**.
  - It’s important for the coach to get to know the team and to do more detailed planning.
  - These workshops should be held at least a week before the main coaching begins.
- During the coaching, the team will want to **reduce the number of tasks** they work on so that they have time and energy to devote to the coaching. As a rule of thumb, allocate 1/3 fewer tasks when planning the period when the coach is present.
- **Questions from potential clients**
  - Why only two or three teams at a time?
  - Why only ensemble working for two hours with each team?
  - What if there are less than 2 teams in the organization?
  - We have about 10 teams, which ones should we start with?
  - Why will the team work on fewer tasks while the coaching is going on?
  - What if the team works in more than one programming language?
  - What’s the difference between a Samman technical coach and a Tech Lead or Architect?
    - A Samman Technical Coach doesn’t make individual contribution to the codebase as a Tech Lead would, but they do take part in coding activities. They aren’t a member of any one team, rather support several as an Architect would.
    - The coach influences people through coaching techniques, facilitation, mentoring and training, but they do not take responsibility for design decisions or architectural strategies as a tech lead or architect would. People in the organization being coached take responsibility for those things.

#### Proposal for a large organzation with hundreds of teams
- TBD

#### Closing the Deal
- Read "Secrets of Consulting", by Gerry Weinberg.
- Recommendation: have someone else do the negotiation with the client on his behalf.

#### Identify your sponsor
- Before you begin coaching any teams, be sure to get in touch with your sponsors. It’s good to begin a good working relationship with them as soon as possible.

### Beginning coaching with a new organization
- Present yourself
  - How you present all this is up to you. You might have some slides prepared, that’s how I usually do this.
- Kick-off workshop with each team
  - Team introduction round (10 minutes)
  - Architecture overview (15 minutes)
  - Issues in the codebase (45 minutes)
  - Structured discussion (30-40 minutes)
    - https://www.liberatingstructures.com/6-making-space-with-triz/
  - Takeaways (5 minutes)
- Chartering workshop
  - Coaching Chartering is about making
an agreement between the coach and the team about the aims and
contents of the coaching.
  - Recap their top issues
  - Structured discussion
  - Team collaboration
  - Iterative and incremental development
  - Code quality and refactoring
  - Test design
  - Testable design
  - Adding tests to existing code
- Offer Samman Coaching
- Persuading Reluctant Teams to be Coached
  - We are too important
  - We already know TDD, we’re too advanced for your coaching
  - We aren’t writing any code, just configuring in yaml files
  - It’s impossible for us to write unit tests
- **Persuasion Principles**
  - Listen to concerns and take them seriously
  - Find out more about the code they are working on
  - Find out more about the teamwork and relationships
  - Offer to tailor how you coach depending on what you find out
  - Involve the sponsor/manager in any decisions
  - (Perhaps) accept rejection gracefully and move on
  - (Perhaps) wait for a better time and try again later
  - (Perhaps) the tailored coaching will be a huge success for you and the team
### Practicalities before coaching begins
- When should we hold the coaching?
  - Remind everyone they should not expect quite as many tasks to be completed during the coaching period as usual. The team should have some time and energy available to devote to the coaching.
  - Agree some dates to book in the team calendar.
- What task should we work on in the ensemble?
  - Ideally, this task should be one that the team was going to work on anyway. Perhaps not the highest priority task or anything with a deadline - you want the freedom to go slowly and learn rather than feel pressured to finish it.
- What physical space should we use for ensemble working?
- Should we use a branch for the code we write in an ensemble?
  - You should probably use whatever branching strategy the team already uses.
  - You’re aiming to change habits and make it normal to push to trunk at least daily.


### Turn up the good
- After each set of 10 coaching days you will **have some time away from the teams** and can reflect yourself on what happened.
- It might also make sense to send participants an **anonymous feedback survey**.
- As well as asking whether the coaching met their **expectations** and what could be **improved**, you could ask if they have noticed any concrete outcomes. Are they collaborating better as a team? Are they writing more unit tests?
- Decide on the next coaching
  - In the original sales process with a new organization I recommend starting with two blocks of ten coaching days.
- Enquire about bringing in a visiting coach or two
- Networking
   - Lunches
   - Strategic phone calls to expand your network
   - Keeping your sponsor involved
   - Other coaches
- Days spent away from the teams
  - If you’re working on the schedule I mentioned before, with 10 coaching days spread over 3 weeks, then you should get a day or two each week to yourself. If you need to travel a long way to your client then that might not be the best choice.
  - Other coaches I know will do 10 coaching days in 2 weeks then spend the third week at home.

### A career as a Samman Technical Coach
I learnt many of the coaching techniques presented in this book by pairing with a more experienced coach, Llewellyn Falco.
- Pair Coaching in a larger organization
- A Visiting Coach Programme
- Preparing for a Technical Coaching Career
  - Ideas for how to get started
  - Attend conferences and workshops
  - Join an online walk-up ensemble or mob
  - Shadowing
- How I became a Technical Coach
  - https://www.eficode.com/blog/agile-coaching

### Final thoughts
- What is the most important thing to remember?
  - The most important thing is that they like you.

### References
- TBD
## Interesting links
- https://www.eficode.com/blog/agile-coaching
- [Peel and Slice](https://github.com/jason-kerney/PeelAndSlice)
- https://www.digdeeproots.com/articles/on/naming-process/
- https://twitter.com/ClareSudbery/status/1434130606976339968


## Questions
- Section "Keeping your sponsor involved"
  - Isn't the daily email kind of opaque micromanagement?
  - What would you do if they asked you for individual feedback?

Bookmark: 151 / 170
