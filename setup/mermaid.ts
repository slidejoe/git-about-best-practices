import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
    //   noteBkgColor: '#181d29',
    //   noteTextColor: '#F3EFF5cc',
    //   noteBorderColor: '#404551',

      // Gitgraph colors
      'git0': '#009DDC',
      'git1': '#2C6B72',
      'git2': '#EF8354',
      'git3': '#F2DC5D',
      'git4': '#6761A8',
      'git5': '#70AE6E',
      'git6': '#009DDC',
      'git7': '#2C6B72'
    },
    //themeCSS: '.commit-labels { fill:red } .commit-label-bkg { display: none } .commit-label { x: 100% }'
    gitGraph: {
        rotateCommitLabel: false,
        parallelCommits: false
        // nodeLabel: {
        //     "width": 75,
        //     "height": 100,
        //     "x": -250,
        //     "y": 0
        //   }
    }
  }
})