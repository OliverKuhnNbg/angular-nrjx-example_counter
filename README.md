# angular-nrjx-example - update list
angular state management with nrjx

## example setup
- ngrx store
- reducer
- actions (load/add customers and reset customer list
- redux dev tools (for data store browser analysis)

Tutorial Base - clean project set up
https://dzone.com/articles/angular-app-state-management-with-ngrx

1. Create an Angular App With Angular CLI

Let's create a new Angular Application 
```
ng new angular-state-management --style=scss --routing=false
```

It will create all the required files and install the dependencies. This will take a few minutes.
2. Load the Project Into the IDE (I'm Using IntelliJ IDEA)
3. Run the App

Let's run the app created by the CLI, just to make sure everything has been created correctly so far.
```
cd angular-state-management 
```
npm start

Check that the app is running on http://localhost:4200/.
4. Install NgRx and Tools

NgRx Schematics provides scaffolding. NgRx commands get integrated into the Angular CLI, and most of the NgRx elements can be created using angular CLI. So, let's add NgRx Schematics. (You can use a new terminal window or exit out from the running angular app by pressing the Ctrl+C key )
```
ng add @ngrx/schematics@latest
```
Configure the Schematics so that NgRx commands are available in Angular CLI by default.
```
ng config cli.defaultCollection @ngrx/schematics
```
Let’s install the NgRx,  dependencies, and dev-tools now.
```
npm install @ngrx/store --save 
```
```
npm install @ngrx/effects --save 
```
```
npm install @ngrx/entity --save 
```
```
npm install @ngrx/store-devtools --save
```
Notice that package.json has been updated.
5. Add an NgRx Store to the App

Let’s generate NgRx Store in the app.

ng generate @ngrx/schematics:store State --root --module app.module.ts

Notice that the following line has been added to the app.module.ts

StoreModule.forRoot(reducers, { metaReducers }),

6. Create a sub Module for Customer

Let's create a separate module for Customers following the 'separation of concerns' principle.

 ng generate module Customer
