Prerequisites: Node.js (^12.22.0, ^14.17.0, or >=16.0.0)

Install node manager which enables you to manange muliple version of node manager on ur machine
nvmw is one of such node mangager

- Install particular version of nodejs:- `nvm install 12.22.0`

- Use particular version of node : `nvm use 12.22.0` // this will change the version of the node system wise using symlink

- install eslint cli globally :- `npm -g i eslint-cli`

- install ESLINT as dev dependencies-- `npm i eslint -D`

- install pretteir module :- `npm install eslint-config-prettier prettier -D`

- configure eslint(create eslint config file) :- `npm run lint -- --init`

    This will create .eslintrc.cjs file. You can replace the content of the file with the one in this repo
    
- Dev dependecies listed in package.json file will be needed to configure eslint. If any of those dependecies are not installed while perfermoning above step install it mannually as dev dependencies    

- Run eslint :-`npx eslint '**/*{js,jsx,ts,tsx}'`

- To do linting while developing the code in VS code you can also install ESLint Extension for vs code
    ![eslint](images/ESLINT.png)
    

- To format the code while saving  add the following in your workspace settings.json file  
   ` { "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "eslint.validate": ["javascript","typescript"] }`

ESLint getting started can be found here
   https://eslint.org/docs/latest/user-guide/getting-started
