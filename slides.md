---
# You can also start simply with 'default'
theme: "slidev-theme-rockdove"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Why am I being such a git about best practices?
info: |
  Are your git repos a dumping ground for code? I'm really fussy about how people use git - and that's a good thing. We'll take a look at branching strategies, the importance of commit messages and how often should you commit, anyway? Let's investigate how, with 5 simple tips, we can turn a code dump into a glorious archive of software and how this can save time, frustration and money.
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: view-transition
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# Icons:
#   - https://icones.js.org/collection/lucide-lab
#   - https://icones.js.org/collection/lucide
#   - https://icones.js.org/collection/logos

layout: intro
---

<style>
  .col-right {
    overflow: hidden;
  }

  .number {
    font-family: var(--font-family-code);
    background: var(--color-heading);
    color: var(--color-background);
    display: block;
    width: 1.2em;
    height: 1.2em;
    line-height: 1.2em;
    text-align: center;
    border-radius: 50%;
    font-size: 5rem;
  }

  small {
    color: var(--color-faint);
    font-size: 0.6em;
  }

  /* Colour the intro slides */
  :nth-child(7n + 1 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-ming);
      --color-heading: var(--color-mandarin);
    }
  }
  :nth-child(7n + 2 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-space-cadet);
      --color-heading: var(--color-mandarin);
      --color-text: white;
    }
  }
  :nth-child(7n + 3 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-mandarin);
      --color-heading: var(--color-space-cadet);
    }
  }
  :nth-child(7n + 4 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-minion-yellow);
      --color-heading: var(--color-dark-blue-gray);
    }
  }
  :nth-child(7n + 5 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-bud-green);
      --color-heading: var(--color-minion-yellow);
    }
  }
  :nth-child(7n + 6 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-carolina-blue);
      --color-heading: var(--color-space-cadet);
    }
  }
  :nth-child(7n + 7 of .slidev-page:has(.slidev-layout.intro)) {
    .slidev-layout {
      --color-background: var(--color-dark-blue-gray);
      --color-heading: var(--color-minion-yellow);
    }
  }

  .mermaid {
    display: flex;
    justify-content: center;
  }
</style>

<style scoped>
h1 {
  width: 90%;
  display: grid;
  grid-auto-rows: min-content; 
  grid-template-columns: auto auto auto;
  gap: 0 1ex;
  grid-auto-flow: row;
  align-items: end;

  strong:nth-child(1) {
    grid-area: auto / 2 / auto / 4;
  }
  strong:nth-child(2) {
    grid-area: auto / 2 / auto / auto;
  }
}
</style>

# Why am I being such a **git** about **best practices**?

---
layout: bio
image: /media/Unicorn-transparent.png
tagline: Senior Developer at Bump Digital
---

- <logos-mastodon-icon /> [@joe@umbraco&#8239;community.social](https://umbracocommunity.social/joe)
- <logos-bluesky />  [@joe.gl](https://bsky.app/profile/joe.gl)
- <lucide-globe /> https://joe.gl/ombek


---
layout: intro
---

# What is **git**?
<!--
Let's start really simple: what is git? Git is the most popular Source Control Management (SCM) system. 
-->
---
layout: icons
---

- <lucide-database-backup /> Backup
- <lucide-package-open /> Versioning
- <lucide-hand-platter /> Sharability

<!--
It can ensure your code is backed up, versioned and accessible to other developers.
-->
---
layout: icons
---

- <lucide-rocket /> Release management
- <lucide-sparkles />Feature development
- <lucide-arrows-up-from-line /> Concurrent working

<!--
But used properly it can be so much more helping ease complex processes such as release management, feature development and multiple people working concurrently. But I can be a bit of a git about it: I'm really fussy about how people use git - and that's a good thing. I've worked with a fair few organisations and development teams over the years, and poor git utilisation is a more common issue than you might think. 
-->

---
layout: image
image: /media/evan-demicoli-HGCqL-tRcac-unsplash.jpg
---
<small>Photo by <a href="https://unsplash.com/@evandemicoli?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Evan Demicoli</a> on <a href="https://unsplash.com/photos/brown-and-green-houses-under-blue-sky-during-daytime-HGCqL-tRcac?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

<!--
But I can be a bit of a git about it: I'm really fussy about how people use git - and that's a good thing. I've worked with a fair few organisations and development teams over the years, and poor git utilisation is a more common issue than you might think. People use git as a dumping ground for code [Click] rather than an well-managed archive of software.
-->

---
layout: image
image: /media/ula-kuzma-9i4DHlC80AQ-unsplash.jpg
---
<small style="position:absolute; left:39%; top: 0;">Photo by <a href="https://unsplash.com/@ula_kuzma?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ula Kuźma</a> on <a href="https://unsplash.com/photos/brown-pathway-between-white-organizers-9i4DHlC80AQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

<!--
But I can be a bit of a git about it: I'm really fussy about how people use git - and that's a good thing. I've worked with a fair few organisations and development teams over the years, and poor git utilisation is a more common issue than you might think. People use git as a dumping ground for code rather than an well-managed archive of software.
-->

---
layout: intro
---

# [5]{.number} simple tips to improve **git** usage

<!-- Today we'll take a look at 5 simple tips which will, with any luck, improve your git practice. -->

---
layout: intro
---

# [0]{.number} Source **Control yourselves**

<!--
This isn't one of the 5, but there are seriously some organisations out there not using version control yet. Version control is _not_ the same as a backup and if you've emailed some code to a colleague, you're probably doing it wrong!
-->

---

<!-- <Tweet id="1432414619310739463" /> -->

![Tweet by @LovelaceCoding: Why did the developer not want to use git? They were scared of committing to it](/media/scared-of-committing.jpg)

<cite class="text-center"><logos-bluesky /> @louella.dev</cite>

<!-- Why did the developer not want to use git? They were scared of committing to it! (Ba-dum tis!) For all the reasons I gave previously, version control is essential for modern day software development. -->

---
layout: icons
---

<ul>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10 }"><logos-mercurial /> Mercurial</li>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10  }"><logos-subversion /> Subversion</li>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10  }"><logos-visual-studio /> Team Foundation Version Control</li>
  <li v-mark="{ at: 1, type: 'circle', color: 'var(--color-bud-green)', strokeWidth: 10, padding: 20 }"><logos-git-icon /> Git</li>
</ul>

<!-- Mercurial (hg), Team Foundation Version Control (TFVC) and Subversion (SVN) are all examples of version control software but [Click] Git has really taken over in the software world and is the industry standard - I'd recommend it for that on its own: there's no point teaching your team a version control system which is (or may become) redundant. -->

---
layout: intro
---

# [1]{.number} Commit **Messaging is everything**

<!-- Tip number 1: Commit Messaging is everything -->

---
layout: center
---

![](/media/xkcd.png)

https://xkcd.com/1296

<!-- Here's a comic from the brilliant XKCD. "As a project drags on, my git commit messages get less and less informative", going from something as descriptive as "created main loop and timing control" into the anarchy of "MY HANDS ARE TYPING WORDS" "HAAAAAANDS". I'd like to say that was just a joke in a comic strip... -->


---
layout: center
---

![](/media/useful-commits.jpg){style='max-height:470px'}

https://x.com/dadolfi/status/1405424992121131010

<!-- ...but it can be all too real. I feel for you Dennis. -->

---
layout: two-cols
---

## Imagine being in Dennis' situation and...

<v-clicks>

- you've discovered a bug introduced in the latest version?
  Where do you even start to look for the solution?
- You see something odd in the codebase, there's no comment so you use a blame/annotate tool to see who changed it and why... but Andy is on holiday and his commit message says “test”
- Some piece of code has changed since you last saw it - why?
  You could revert it back to how you like it but maybe it was changed for a reason?
  You fire up the blame tool again, “Fixes date formatting issue in Chrome” - better leave it as it is!
  Saved by a good commit message!

</v-clicks>

::right::

```mermaid {scale: 0.65}
%%{
  init: {
    'logLevel': 'debug',
    'theme': 'base',
    'themeVariables': {
      'commitLabelBackground': 'white',
      'commitLabelFontSize': '20px'
    },
    'gitGraph': {
      'rotateCommitLabel': false
    }
 }
}%%
gitGraph BT:
    commit id: "bump"
    branch develop
    checkout develop
    commit id: "bump "
    commit id: "bump again"
    checkout main
    merge develop
    commit id: "bump  "
    checkout develop
    commit id: "translation fix"
    checkout main
    merge develop
    commit id: "bump   "
    commit id: "bump    "
    checkout develop
    commit id: "test"
    commit id: "Fixes date formatting issue in Chrome"
    commit id: "test "
    checkout main
    merge develop
```

<!--
Imagine being in Dennis' situation and...



- [Click]you've discovered a bug introduced in the latest version?
  Where do you even start to look for the solution?
- [Click]You see something odd in the codebase, there's no comment so you use a blame/annotate tool to see who changed it and why... but Andy is on holiday and his commit message says “test”
- [Click]Some piece of code has changed since you last saw it - why?
  You could revert it back to how you like it but maybe it was changed for a reason?
  You fire up the blame tool again, “Fixes date formatting issue in Chrome” - better leave it as it is!
  Saved by a good commit message!

  -->

---
layout: icons-header
cols: 3
---

## "What does this commit do?"

::icons::

- <lucide-heart-pulse /> Fixes...
- <lucide-undo-dot /> Reverts...
- <lucide-lab-socket-uk /> Integrates...

<!-- Some people will tell you that good commit messages should be written as if answering the question "what does this commit do?" and that's good advice! Starting your commit message with a verb like "Fixes ...", "Reverts ..." or "Integrates ..." is a good practice too. -->

---
layout: icons-header
cols: 3
---

## Not enough!

::icons::
<ul>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10 }"><lucide-heart-pulse /> Fixes bugs</li>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10 }"><lucide-undo-dot /> Reverts broken changes</li>
  <li v-mark="{ at: 1, type: 'crossed-off', color: 'var(--color-mandarin)', strokeWidth: 10 }"><lucide-lab-socket-uk /> Integrates API</li>
</ul>


<!-- But these alone are not enough. "Fixes bugs" or "Reverts broken changes" [Click] are still useless. -->

---
layout: icons-header
cols: 3
---


## "What does this commit do?"

::icons::

- <lucide-heart-pulse /> **Fixes date formatting issue in Chrome**
  Chrome always assumes the MM/DD format no matter what locale the browser is set to*
- <lucide-undo-dot /> **Reverts new “Paytastic Checkout” checkout flow**
  Customer has changed their mind and wants to revert to using LegacyCart
- <lucide-lab-socket-uk /> **Integrates SMS API**
  Sending an SMS to customers when their order ships using the “Simple SMS Sender” API

<small>* it doesn't, this is a made up example</small>

<!-- Detail, detail, detail! GitKraken (and many other GUI git clients) give you two fields for your commit messages - a title and a description. It's best to keep your title short (GitKraken recommends 72 characters) but you can add even more detail in the description field. Fixes date formatting issue in Chrome Chrome always assumes the MM/DD format no matter what locale the browser is set to* Reverts new "Paytastic Checkout" checkout flow Customer has changed their mind and wants to revert to using LegacyCart Integrates SMS API Sending an SMS to customers when their order ships using the "Simple SMS Sender" API  -->

---
layout: center
class: invert
---

```cmd
git commit -m "Title" -m "Description"
```


```
Title⏎
⏎
Description
```
<!-- Choice of git client isn't an excuse either - you can even do the on the command line by passing in two "message" parameters -->

---
layout: image-right
image: /media/link-to-issues.jpg
background-size: contain
---

## Link commits to issues

- Include the title of the issue/item
- Include an ID or link to the issue

GitKraken lets you hook up your issue tracker to your git repos so you can automatically stick an issue number into the branch name (and therefore in the merge commit too!)

  <!-- TODO:Image -->

  <!-- If you have a ticketing system or to-do list, it sometimes helps to include the title of the item in your commit and an ID or link to the Initial issue can prove very useful. GitKraken (and many other GUI git clients) let you hook up your issue tracker to your git repos so you can automatically stick an issue number into the branch name (and it'll therefore be in the merge commit too!) -->

---
layout: intro
---

# [2]{.number} Push **Little and often**

<!-- Tip number 2 is to commit and push little and often I've seen a lot of different tactics when it comes to how often people commit, but the most persuasive argument I've heard is for "little and often". Don't forget git acts as a backup of your work and progress. -->

---
layout: icons
---

- # <lucide-hard-drive />
- # <lucide-pill />
- # <lucide-lab-waves-shark-fin />
- # <lucide-bus-front />

<!-- There's no point *only* committing when something is feature complete: what happens if your hard drive packs up overnight? Or you're off sick tomorrow and somebody else is left to pick up your work? It's far more useful to have partially complete work committed than not. Although it's generally good practice to ensure each commit is in a buildable state - it's ok if your work-in-progress (WIP) commits don't build. -->

---
layout: two-cols
---

## Reverting little things

You can also use your tiny commits to help you revert unwanted pieces of functionality, while it can be a real pain to pull small chunks of code out of a bigger commit.

Perhaps changing the colour-scheme to green text on a red background was a <i>bit</i> much...?

::right::

```mermaid {scale: 0.75}
%%{
  init: {
    'logLevel': 'debug',
    'theme': 'base',
    'themeVariables': {
      'commitLabelBackground': 'white',
      'commitLabelFontSize': '20px'
    },
    'gitGraph': {
      'rotateCommitLabel': true
    }
 }
}%%
gitGraph BT:
    commit id: "Initial commit"
    branch feature/git-talk
    commit id: "Write talk"
    commit id: "Create presentation"
    commit id: "Change colour-scheme to green on red" type: HIGHLIGHT
    commit id: "Reorder slides"
    checkout main
    merge feature/git-talk
    commit id: "Reverts 'Change colour-scheme to green on red'" type: REVERSE
```

<!-- You can also use your tiny commits to help you revert unwanted pieces of functionality, while it can be a real pain to pull small chunks of code out of a bigger commit. Perhaps changing the colour-scheme to green text on a red background was a bit much...? -->

---
layout: intro
---

# [3]{.number} **Squash** rackets

<!-- But don't all these "little and often" commits start to make a _racket_ after a while? (See what I did there?) That's where squash and amend come in.  -->

---
layout: two-cols-header
---

## Amend commits

::left::

<<< @/snippets/gitgraphs/wip-commit.mmd mermaid {scale: 0.75}

::right::

![](/media/gk-amend.png)

<!-- As I mentioned, I'm a big fan of a WIP (Work -In-Progress) commit at the end of the day. But, come tomorrow morning and I've finished that small segment of work off, I don't want two commits "WIP - Restyle footer" *and* "Restyle footer". So I can amend my "WIP" commit to include all changes and rename it to "Restyle footer". -->

---
layout: two-cols-header
---

## Amend commits

::left::

<<< @/snippets/gitgraphs/wip-commit.mmd mermaid {scale: 0.75}

::right::

```mermaid {scale: 0.75}
gitGraph BT:
    commit id: "Initial commit"
    branch develop
    commit id: "Restyle footer"
```




---
layout: center
class: invert
---

```cmd
git commit --amend -m "Restyle footer"
```

https://atlassian.com/git/tutorials/rewriting-history

<!-- Or in the command line `git commit --amend -m "Restyle footer"`. Atlassian has a great tutorial about [rewriting git history from the command line](https://www.atlassian.com/git/tutorials/rewriting-history). -->

---
layout: two-cols-header
---

## Squash commits 

::left::

<<< @/snippets/gitgraphs/pre-squash.mmd mermaid {scale: 0.75}

::right::

![](/media/gksquash.png){v-click}

<!-- If you want to combine multiple commits, or you've already committed your second round of changes, you can look into "squashing" the commits. [Click] In GitKraken, this is done by selecting the multiple commits you want to combine, right clicking and selecting "Squash". There are some scenarios when squashing won't be available - in this case you might be best just leaving the history as-is! -->

---
layout: two-cols-header
---

## Squash commits 

::left::

<<< @/snippets/gitgraphs/pre-squash.mmd mermaid {scale: 0.75}

::right::

```mermaid {scale: 0.75}
gitGraph BT:
    commit id: "Initial commit"
    branch develop
    commit id: "Restyle footer"
    commit id: "Restyle header"
```


<!-- So what does squash do, exactly? Squash is a method of "rewriting history" in git. Essentially, it pretends your initial commits never happened, and creates a new commit containing all the changes from your previous commits. -->

---
layout: center
---

## Force Push


![](/media/force-push.png)


```cmd
git push --force
```

<!-- Because we're rewriting history, you'll often get a scary warning when you try to push. (Or have to use the --force flag if using the command line) Really, though, this is nothing to worry about.  -->

---
layout: two-cols
---

### Local

```mermaid {scale: 0.75}
%%{
  init: {
    'logLevel': 'debug',
    'theme': 'base',
    'themeVariables': {
      'commitLabelBackground': 'white',
      'commitLabelFontSize': '20px'
    },
    'gitGraph': {
      'rotateCommitLabel': true
    }
 }
}%%
gitGraph BT:
    commit id: "Initial commit"
    branch develop
    commit id: "Restyle footer"
    commit id: "Restyle header"
```

::right::
### Remote

```mermaid {scale: 0.75}
%%{
  init: {
    'logLevel': 'debug',
    'theme': 'base',
    'themeVariables': {
      'commitLabelBackground': 'white',
      'commitLabelFontSize': '20px'
    },
    'gitGraph': {
      'rotateCommitLabel': true
    }
 }
}%%
gitGraph BT:
    commit id: "Initial commit"
    branch develop
    commit id: "WIP: Restyle footer"
    commit id: "WIP: Restyle footer part 2: The Lost World"
    commit id: "Restyle footer complete"
    commit id: "Restyle header"
```

<!-- The reason we have to `push --force` is because we've changed the commits we've already pushed, rewriting history. On the left is how our remote thinks our branch looks, but on the right is how we think the branch looks on our local machine (after squashing). Since the commits are different, git want's us to be sure we want to overwrite what's on the server with what we have locally, hence "forcing" that overwrite. The only real thing to be wary of here is if anybody else has been working on the same branch, you might overwrite their work too. So it's best to avoid this (but also always check for new commits before you force push!) -->

---
layout: image
image: /media/roselyn-tirado-GDWmu0bFfS4-unsplash.jpg
---

<!-- If I'm doing some DIY at home, things can get pretty messy with tools and dirt around the place. Before I go to bed, I might do a quick tidy up but the next day, once I've finished the piece of work, all the tools go away and I vacuum up the mess I made. I'll definitely have it clean and tidy before I let anybody else in the house! Treat your branches the same way. It's OK for them to be a bit messy while you've got things in progress, but as soon as you're finished or ready to merge into a shared branch, you ought to tidy it up - nobody wants to see your messy branch! -->

---
layout: image-left
image: /media/slip.jpg
---

# <lucide-shield-alert /><br />Don't squash your mistakes
They tell a story

<small>
Image "Slip?" by Perry Hall on Flickr <a href="https://www.flickr.com/photos/freakingnoob/3438012333/">flickr.com/photos/freakingnoob</a>
</small>

<!-- One thing to note, though: don't squash your mistakes! Your mistakes and reworkings tell a story. It could provide valuable explanation to a future developer and documents your mistakes and learnings. Use amend and squash to tidy up, not to sweep under the rug! -->

---
layout: intro
---

# [4]{.number} Get with the **flow**

<!-- Tip number 4 is to use a branching strategy. -->

---
layout: icons-header
cols: 4
---


## Flows

::icons::

- <lucide-git-branch /> Git Flow
- <logos-github-icon /> GitHub Flow
- <logos-gitlab /> GitLab Flow
- <lucide-git-branch /> Common Flow

::footer::
https://go.joe.gl/which-flow

<!-- There are many branching strategies out there and I don't really mind which one you use. My personal favourites are GitHub flow and Common Flow (or a combination of the two) but there are many more. GitHub Flow and GitLab Flow aren't specific to their retrospective hosts either. Any flow can be used anywhere. Although a host may make it a bit easier to follow their flow on their host. -->

---
layout: icons-header
cols: 5
---

<style scoped>
  /* ul {
    font-size: 0.8em;
  } */
</style>

## GitFlow

::icons::

- <lucide-git-branch />
  **Create a branch**
  with a short descriptive name
- <lucide-git-commit-vertical />
  **Add commits**
  Each commit as an isolated, complete change
- <lucide-git-pull-request-arrow />
  **Open a Pull Request**
  linked to an issue
- <lucide-message-circle-code />
  **Discuss and review**
  with the maintainer or a colleague
- <lucide-git-merge />
  **Merge**
  and delete your branch

::footer::

https://go.joe.gl/ghflow

<!-- TODO: longer version should have CommonFlow too -->

<!--
GitHub flow, put very simply, involves creating a branch for your feature (with a short descriptive name), Adding your commits to that branch, each commit containing "an isolated, complete change" and then opening a Pull Request. You discuss and review your code changes with your colleagues. Once everyone is happy, your Pull Request is merged into the main branch. Main is always in a deployable state. The GitHub flow tutorial goes into a little more detail.

It's worth noting that if none of these git flows make sense to you, you can take inspiration from them. I don't know of many companies who strictly follow any one particular strategy. So pick one as a baseline and adapt it for your organisation. GitHub Flow and GitLab Flow don't have to be restricted to GitHub or GitLab - you can use any flow anywhere
-->

---
layout: intro
---

# [5]{.number} Rebase ***and*** merge

The best of both worlds

<!--
Our final tip to keep these git repos tidy is to rebase AND merge.
-->
---


<<< @/snippets/gitgraphs/only-merge.mmd mermaid {scale: 0.8}

---
layout: center
---

![](/media/gh-rebase-and-merge.png)

<!-- GitHub provides these 3 options on completion of a Pull Request: - Create a merge commit (which creates the mess you see above) - Squash and merge - Rebase and merge -->

---
layout: two-cols-header
---

## Squash and merge (with fast-forward)

::left::

<div class="view-transition-graph">
<<< @/snippets/gitgraphs/only-merge.mmd mermaid {scale: 0.7}
</div>

::right::

```mermaid {scale: 0.7}
gitGraph BT:
    commit id: "Initial commit"
    commit id: "Another talk"
    commit id: "Git talk"
    commit id: "Git article"
```

<!-- Now, some people like to squash and merge (or squash and rebase - it's the same thing): your entire feature gets squashed into one commit and plopped straight onto the develop or main branch. This is very neat and tidy, I'll give you that! However, you lose a lot of the documentation of when, how and why code changes were made. I'd much rather keep this history where we can. -->

---
layout: two-cols-header
---

## Rebase and merge

::left::

<div class="view-transition-graph">
<<< @/snippets/gitgraphs/only-merge.mmd mermaid {scale: 0.7}
</div>

::right::

<<< @/snippets/gitgraphs/rebase-and-merge.mmd mermaid {scale: 0.7}

<!-- Which leaves us with "Rebase and merge". This option allows us to avoid losing data while keeping the tree clean and tidy so is, of course, my favourite. (If you're using Azure DevOps, you can set this method as the merge type too - they call it a ["semi-linear merge"](https://devblogs.microsoft.com/devops/pull-requests-with-rebase/#semi-linear-merge)).  -->

---

<div class="view-transition-graph">
```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch feature/git-talk
    commit id: "Write talk"
    branch feature/git-article
    commit id: "Fix typos"
    checkout feature/git-talk
    merge feature/git-article
    commit id: "Create presentation"
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout main
    merge feature/git-article
    checkout feature/git-talk
    commit id: "Reorder slides"
    checkout main
    merge feature/git-talk
```
</div>

<!-- But wait, what's a rebase? I've taken our messy commits and I'm going to time-travel to before we did the simple merge operations so we can walk through how we'd do this with rebase and merge. -->

---

```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch feature/git-talk
    commit id: "Write talk"
    branch feature/git-article
    commit id: "Fix typos"
    checkout feature/git-talk
    merge feature/git-article
    commit id: "Create presentation"
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout feature/git-talk
    commit id: "Reorder slides"
```

 <!-- I've taken our messy commits and I'm going to time-travel to before we did the simple merge operations so we can walk through how we'd do this with rebase and merge. We can actually leave the merge of the `another-talk` branch in place, since it's already cleanly merged into `main` with no intermediate commits to main, so it's just the other two branches we need to worry about. -->

---

```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch "feature/git-talk "
    commit id: "Write talk"
    branch feature/git-article
    commit id: "Fix typos"
    checkout "feature/git-talk "
    merge feature/git-article
    commit id: "Create presentation"
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout "feature/git-talk "
    commit id: "Reorder slides"
    checkout main
    branch feature/git-talk
    commit id: "Write talk "
```

<!-- Now, I've created a new branch from the latest `main` and faded out our existing `git-talk` branch. If you've ever done a cherry-pick before to move a commit from one branch to another, a rebase is like an extreme version of that! When told to rebase, git will cherry-pick each commit in a branch in turn and add it to a new branch at the point requested (in this case, a later version of the same `main` branch). Here I've "cherry-picked" the "Write talk" commit and put it onto our new branch. -->

---

```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch "feature/git-talk "
    commit id: "Write talk"
    branch feature/git-article
    commit id: "Fix typos"
    checkout "feature/git-talk "
    merge feature/git-article
    commit id: "Create presentation"
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout "feature/git-talk "
    commit id: "Reorder slides"
    checkout main
    branch feature/git-talk
    commit id: "Write talk "
    commit id: "Fix typos "
    commit id: "Create presentation "
    commit id: "Reorder slides "
```

<!-- Then we repeat that for all the other commits needed (including "fix typos" in that other branch), adding them in order and fixing any conflicts that may come about for each one. And that's actually the rebase out the way! We've "cherry picked" each commit and resolved any conflicts, but in a more automated way than actually doing loads of cherry-picks. -->

---

```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch "feature/git-talk "
    commit id: "Write talk"
    branch feature/git-article
    commit id: "Fix typos"
    checkout "feature/git-talk "
    merge feature/git-article
    commit id: "Create presentation"
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout "feature/git-talk "
    commit id: "Reorder slides"
    checkout main
    branch feature/git-talk
    commit id: "Write talk "
    commit id: "Fix typos "
    commit id: "Create presentation "
    commit id: "Reorder slides "
    checkout main
    merge feature/git-talk
```

<!-- Now it's time to merge `git-talk` into `main`. That old branch doesn't need to be there any more - it doesn't actually exist locally, so we can hide that. -->

---

```mermaid {scale: 0.65}
gitGraph BT:
    commit id: "Initial commit"
    branch feature/git-article
    checkout main
    branch feature/another-talk
    commit id: "Write another talk"
    checkout main
    merge feature/another-talk
    checkout feature/git-article
    commit id: "Rewrite talk as blog post"
    checkout main
    branch feature/git-talk
    commit id: "Write talk "
    commit id: "Fix typos "
    commit id: "Create presentation "
    commit id: "Reorder slides "
    checkout main
    merge feature/git-talk
```

 <!-- That old branch doesn't need to be there any more - it doesn't actually exist locally, so we can hide that. And then all we have to do is rebase and merge our final branch, `another-talk`. -->

---

<div class="view-transition-graph">
<<< @/snippets/gitgraphs/rebase-and-merge.mmd mermaid {scale: 0.65}
</div>

<!-- To give us this! Each feature makes a neat "D" shape with the `main` or `develop` branch, with no crossovers. -->

---
layout: two-cols-header
---

## Rebase and merge

::left::

<<< @/snippets/gitgraphs/only-merge.mmd mermaid {scale: 0.7}

::right::

<div class="view-transition-graph">
<<< @/snippets/gitgraphs/rebase-and-merge.mmd mermaid {scale: 0.7}
</div>

<!-- As you can see, this method removes the muddle of criss-crossing merges, while maintaining the whole branch structure and all the detail in every commit. -->

---
layout: center
class: invert
---

1. #### **Rebase** ...and resolve any conflicts

  ```cmd
  git rebase main feature/git-article
  ```
  <br />

2. #### **Merge** in the feature/git-article branch

  ```cmd
  git switch main
  git merge feature/git-article
  ```
  <br />
  

3. #### **Delete** the unnecessary branch

```cmd
git branch -d feature/git-article
```

<!-- You can also enact this process without a Pull Request utilising the individual tools `rebase` your feature onto `main` and then `merge` your feature into `main` in any git client of your choosing, here's the command line commands for this. -->

---

# An awesome archive of software

<<< @/snippets/gitgraphs/rebase-and-merge.mmd mermaid {scale: 0.7}

<!-- And that's it. That's our stunning archive of software. We're source controlled with small incremental commits, each having a meaningful and detailed commit message sat comfortably in feature branches with no distracting noise and complicated merges. It reads easily from bottom to top, with no detail hidden or mistakes masked. -->

---
layout: image-left
class: invert
image: /media/brendan-stephens-Bl2tjfoBNv4-unsplash.jpg
---

# <lucide-shield-alert /><br />A note on **Rewriting history**

<small>
Photo by <a href="https://unsplash.com/@brendan_stephens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brendan Stephens</a> on <a href="https://unsplash.com/photos/black-and-white-labeled-book-Bl2tjfoBNv4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</small>

<!-- Both tips 4 and 5 do something controversial in the git world: rewriting history. Not "rewriting history" as in the act of whitewashing a historical atrocity, but simply changing what's been pushed to the git repository (AKA history) after its happened (rewriting). Squashing, amending, rebasing and patching are all examples of git history being rewritten. And I've just been actively advocating for 3 of these! -->

---
layout: two-cols
---

### True history

<div class="view-transition-graph">
<<< @/snippets/gitgraphs/only-merge.mmd mermaid {scale: 0.7}
</div>

::right::

### "Feature history"

<<< @/snippets/gitgraphs/rebase-and-merge.mmd mermaid {scale: 0.7}

<!-- Maintaining your "true history" certainly has its merits: it can be useful for learning and code reviews. There's also the risk you might mess up your history if you never tamper with it! However, the way I see it is that this shouldn't at the cost of the readability of your repo. I prefer to maintain what I like to call my "*feature* history" where the order of our feature development is true, even if we're tweaking the timelines a little of when each feature was developed relative to each other. I don't advocate for complete rewriting, just a quick tidy up. -->
---
layout: image-left
image: /media/shocked-rich-cartoon.png
---

# <lucide-shield-alert /><br />Wait did you say **"risk"?!**

<small>
AI generated. Based on <a href="https://umbracocommunity.social/deck/@jacksorjacksor/112332950206455455">"Shocked man" by Richard Jackson</a>
</small>

 <!-- just make sure you've _pushed_ your repository before you start messing with history. Then double check before your force push. -->

---
layout: intro
---

# <lucide-cloud-upload /> **Push** before you **rewrite.**
# <lucide-test-tube-diagonal /> **Check** before you **force push.**

<!-- As for that "risk" I mention when rewriting history, [CHANGE SLIDE] just make sure you've _pushed_ your repository before you start messing with history. Then double check before your force push. -->

---
layout: icons-header
cols: 2
---

# Thank you

::icons::

- <logos-mastodon-icon /> [@joe@umbraco&#8239;community.social](https://umbracocommunity.social/joe)
- <logos-bluesky />  [@joe.gl](https://bsky.app/profile/joe.gl)
- <lucide-globe /> https://joe.gl/ombek
- <lucide-link /> https://joe.gl/ombek/links/git-about-best-practices/

::footer::

Git graphs generated with Mermaid, more about Mermaid: https://24days.in/umbraco-cms/2024/process-maps/

<!-- Thank you! -->