## Objectives

* Be able to use ngRoute
* Be able to associate different templates with different routes
* Be able to wire up a custom angular service
* Be able to get user input from a form
* Be able to share data and functions between two controllers using that service
* Be able to use the Angular $location service to redirect a user after an action

# Overview

Use the included Angular application to practice implementing routes, controllers,
and services in an Angular app.

__Take it one step at a time, ensuring along the way that each step has been
successfully completed.__

__Don't just copy and paste from a past exercise!! Try to remember and look things
up online!__

## Step 1: Be able to confiugre ngRoute

ngRoute is an Angular module that we can use to add routing to our application.

__There are 3 steps for setting up ngRoute. See if you can remember them.__
(Don't add any routes yet! Just get ngRoute configured in your app)

1. -
2. -
3. -

## Step 2: Be able to associate different templates with different routes

In your route configuration, add routes for the following:

__All Messages__

When a user visits `/` it should:
* render `messages.html`
* use the `MessagesController`

__Post A New Message__

When a user visits `/new` it should:
* render `new_message.html`
* use the `PostMessageController`

__Other than configuring the above routes, a few more things need to be done
to get everything wired up. See if you can remember. You'll know you've got it right when you see the `Success!` message on each page. Stay calm!__


## Step 3: Be able to wire up a custom Angular service

The factory has been built for you, you just need to get everything talking.

__This requires two steps similar to previous steps you've taken to wire up new things.__

1. -
2. -

## Step 3.5: Display the seed message when the use hits the home page.

__In `MessagesController` add the following:__

```
$scope.vw.messages = MessagesService.all;
```

__In `messages.html` add the following:__

```
<div class="well" ng-repeat='message in vw.messages'>
  <h2>{{message.id}}. {{message.text}}</h2>
</div>
```
__You know you're successful when you see the seed message displayed__

## Step 4: Be able to get user input from a form

Now it's time to take in user input and add it to our messages array using our
service. But this time, we'll use the `PostMessageController`.

Remember to take it one step at a time.

1. Use the `ng-submit` directive to trigger a function on submit
2. Use `ng-model` to get the user input
3. Pass the model into your `ng-submit` function.
4. In the `PostMessageController` see if you can `console.log` the user input

## Step 4.5: Adding the user input to our messages array

1. Just like you did in `MessagesController`, inject our service into `PostMessageController`

__In `PostMessageController`:__

1. In your submit function, call the `add` function from our service and pass in
the user input.

__If you're stuck, look back at the `MessagesController`. How did we use our service
there?__

## Step 5: Redirect the user to `/` after submitting a message

`$location` is an Angular service that we can use to tell the app what url to go
to after certain user actions are triggered. In this case, we want to redirect
the user to `/` after they submit a post so they can see it displayed.

__Go to the Angular docs for `$location` and see if you can figure out how to
use this service to add a redirect to the end of your submit function. It is two
simple steps, so see if you can scan the docs to find just what you need.__


__STUCK?__

1. Did you include the `script` in your `index.html`?
2. Did you inject the dependency into your controller?
3. Are you missing the `angular-route` CDN?
