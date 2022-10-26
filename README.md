Prerequisites: Node.js (^12.22.0, ^14.17.0, or >=16.0.0)

Install node manager which enables you to manange muliple version of node manager on ur machine
nvmw is one of such node mangager

To install particular version:- `nvm install 12.22.0`

Use particular version of node : nvm use 12.22.0 // this will change the version of the node system wise using symlink

- install eslint cli globally :- `npm -g i eslint-cli`

- install ESLINT as dev dependencies-- `npm i eslint -D`

- install pretteir module :- `npm install eslint-config-prettier prettier -D`

- configure eslint(create eslint config file) :- `npm run lint -- --init`

    This will create .eslintrc.cjs file. You can replace the content of that file with the one in this repo

- Run eslint :-`npx eslint '**/*{js,jsx,ts,tsx}'`

- To do linting while developing the code in VS code you can also install ESLint Extension for vs code
    ![eslint](images/ESLINT.png)
    

- To format the code while saving  add the following in your workspace settings.json file  
   ` { "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "eslint.validate": ["javascript","typescript"] }`

ESLint getting started can be found here
   https://eslint.org/docs/latest/user-guide/getting-started
