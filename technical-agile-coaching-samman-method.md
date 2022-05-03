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

### Explaining wahy you should hold a Learning Hour
- TBD

### The theory and practice of a teaching and learning
- TBD

### Sample learning hours
- TBD

### Learning topics
- TBD

### Remote learning hours
- TBD

## Part 3: Samman Coaching Engagements

- TBD

## Interesting links

- https://twitter.com/ClareSudbery/status/1434130606976339968
- TBD

Bookmark: 67 / 170
