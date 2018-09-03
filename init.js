// not sure how this got here
atom.packages.onDidActivateInitialPackages(() => {
  const gitPlus = atom.packages.getActivePackage("git-plus")
  if (gitPlus) {
    const gp = gitPlus.mainModule.provideService()
    gp.registerCommand(
      "atom-text-editor",
      "your-custom-namespace:add-chmod",
      () => {
        gp
          .getRepo() // If there are multiple repos in the project, you will be prompted to select which to use
          .then(repo => {
            const activeEditor = atom.workspace.getActiveTextEditor()
            if (activeEditor)
              gitPlus.run(repo, `add --chmod=+x ${activeEditor.getPath()}`)
          })
      }
    )
  }
})
