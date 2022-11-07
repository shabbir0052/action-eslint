nodePrerequisites: Node.js (^12.22.0, ^14.17.0, or >=16.0.0)

Install node manager which enables you to manange muliple version of node manager on ur machine
nvmw is one of such node mangager

To install particular version:- `nvm install 12.22.0`

Use particular version of node : nvm use 12.22.0 // this will change the version of the node system wise using symlink


##### Setting up eslint for node project

- install eslint cli globally :- `npm -g i eslint-cli`

- install ESLINT as dev dependencies-- `npm i eslint -D`

- install pretteir module :- `npm install eslint-config-prettier prettier -D`

- configure eslint(create eslint config file) :- `npm init @eslint/config`  

- Answer the following questions

      √ How would you like to use ESLint?  To check syntax, find problems, and enforce code style    
      √ What type of modules does your project use?  CommonJS (require/exports)
      √ Which framework does your project use?  None of these
      √ Does your project use TypeScript? ·  Yes
      √ Where does your code run? ·  Node

      Answer questions about your style
      What format do you want your config file to be in: javascript
      What style of indentation do you use : spaces
      What quotes do you use for strings : double
      What line endings do you use : window
      Do you require semicolons : Yes

      You will get the following prompt
      The config that you've selected requires the following dependencies:
      eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
      √ Would you like to install them now? · Yes
      √ Which package manager do you want to use? · npm


- This should create .elintrc.cjs file in your project


- Install the other dev dependencies mentioned in the package.json by running npm install

- replace the content of .elintrc.cjs with the on provided in this repository
    Customize the file as per requirement , like node modules which needs to be excluded or included

- restat the vscode . In an   output tab in vscode you should see the following message

      [Info  - 11:44:12 AM] ESLint server is starting
      [Info  - 11:44:13 AM] ESLint server running in node v16.14.2
      [Info  - 11:44:13 AM] ESLint server is running.
      [Info  - 11:44:16 AM] ESLint library loaded from: C:\workspace\git\action-eslint\node_modules\eslint\lib\api.js


- Run eslint :-`npx eslint '**/*{js,jsx,ts,tsx}'`


##### Setting up VS code, to apply linting during development
  Install ESLint Extension for vs code
    ![eslint](images/ESLINT.png)
    

- To format the code while saving  add the following in your workspace settings.json file  
   ` { "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "eslint.validate": ["javascript","typescript"] }`

ESLint getting started can be found here
   https://eslint.org/docs/latest/user-guide/getting-started
