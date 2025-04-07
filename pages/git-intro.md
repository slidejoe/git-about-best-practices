---
#class: text-center
---
## The confusing landscape of git brands

They all start with “Git-”, but they all do different things!

<style scoped>
td {
font-size: 3rem;
}
img {
  max-height: 3.6rem;
}

</style>

| Version control    | Hosting                               | Clients                                                      |
| ------------------ | -------------------------------------- | ------------------------------------------------------------ |
| <logos-git-icon /> | <logos-github-icon /><br /><logos-gitlab /> | <logos-github-icon /><br /><logos-terminal /><br /><logos-gitkraken /><br />![Git Extensions logo](/media/gitextensions.svg) |

<!-- So, now we've settled on git, lets get some of the confusion surrounding git and brand names. Although they all sound similar, they all do different things. Git is the version control software. The alternatives to this are the ones we just talked about on the other slide, but they're all incompatible with git. Then we move into the next column: hosting. GitHub, GitLab, etc. are version control hosting providers. They run the git software in the cloud to help us run git with a distributed team. The git clients are in our final column. Confusingly GitHub (the host) has a client called GitHub Desktop to interact with it. But also GitKraken, Git Extensions and the git command line are also clients. They're used to interact with our local git software and push those changes up to our "remote" repositories hosted by the host. -->

---
layout: icon-bullets
---

## Getting started with git is **free**

- <logos-github-icon /> **GitHub**
  Pay for extra CI/CD and advanced team features
- <logos-gitlab /> **GitLab**
  Pay for extra CI/CD and advanced team features
- <logos-microsoft-azure /> **Azure DevOps**
  Pay for extra CI/CD and testing
- <logos-bitbucket /> **Bitbucket**
  Pay for extra CI/CD

---
layout: icon-bullets
---

<style scoped>
    * {
    --icon-bullets-columns: 3;
  }
</style>

## Git clients
Advocating for a visual git tree

- <logos-gitkraken /> **GitKraken**
  Free for OSS or £4pm
  https://go.joe.gl/gk50
- ![Git Graph logo](/media/gitgraph.png) **Git Graph for VS Code**
  Free
  https://go.joe.gl/code-git-graph
- ![Git Extensions logo](/media/gitextensions.svg) **Git Extensions**
  Free
  https://gitextensions.github.io

<!--
A quick note on Git Clients now. Git clients are how you interact with your remotely hosted git repository. There are lots of options out there, but I'd strongly suggest using one that can render a really good git graph or git tree. The client built into Visual Studio or GitHub Desktop are great for beginners, but you'll soon find them inadequate as you need to do more complicated things or diagnose merge issues. I'm a really big fan of the way GitKraken works and the really useful git tree GitKraken provides. For me, the time saved by using GitKraken easily outweighs the costs. But, if it's more your style, the Git Graph extension by Michael Hutchison is a very good open-source alternative.
-->

---

# <solar-hearts-bold-duotone /> the command line?

![A screenshot of an attempted merge in GitKraken's terminal with the updated git tree shown above](/media/gkterminal.png)

<!--
Visual git clients really reduce the barrier to entry, but I'm not saying that using Git via the command line is out either. Knowing how to interact with Git in it's simplest form is definitely a skill worth having... but _please_ use a visual tool too, just to double-check. Git experts get it wrong too. And it's much easier to fix any issues the earlier they're caught. I've seen it a number of times where a die-hard command line user has come to me looking for help with their git issues and it's been a simple fix when we open up the repo in a visual tool. In fact, both GitKraken and VS Code (with the help of Git Graph) allow you to interact via the terminal while also rendering your git tree.
-->

---
layout: icon-bullets
---

 ## I'll be providing examples for...

- <logos-gitkraken /> **GitKraken**
  <small>Methods will be similar for other clients</small>
- <logos-terminal /> **git command line interface**
