# ATHLETE-101
### Overview
-Users can create account

-Users can publish mutiple workout plans

-Users can follow (subscribe) other users' workout plans

-anyone can join but only logged in user can create / subscribe workout plan(only subscribing user can view the whole data)

-top rated workout plan will show on the main page of the app

## Main Page
    -Log-in / Sign-up buttons
    -search bar
    -(if not logged in, show some describtion of this app)
    -my profile button (if logged in)
    -Show top rated work out plans
    -below the top rated, it shows user what kind of categories of workout plans.
## search bar
    -able to search 
    - on Click, shows all the results
## results from search bar
    - shows all the related workout that user searched for
    - put filter so it can show by rating/date (recent/older)
    -will have a short description of the work out
    -have search bar on the top, have login/sign up or my profile
## workout plan page
    -logged in or not, user will see brief version of the workout.(trainer name, date, some pictures, some description but not all of them)
    -Once the user subscribe the workout or if the user is the owner of the post, will be able to see the whole work out plan.
    -have search bar on the top, have login/sign up or my profile
## login
    - have a simple log in page with email and password
## signup
    -  have a simple sign-up from that will grab all the data from the user.
## my profile
    - show profile description with my posts and subscribing posts.
    -balance(is just fake data for now)
    -have search bar on the top
    -have create and explore(this explore shows the categorized list just like the main page bottom section)
    -able to delete and edit the workout plan
## create workout plan
    -shows a form that user can put information of the work out.
    -title/description/pictures/price
    -publish button.
    -will be able to add each exercise in the form
## delete workout plan
    -delete the work out plan
## edit workout plan
    -shows a filled out form with data that user input before and able to edit
    -publish button
## Shopping Cart
    -shows the plan that user clicked subscribe.
    -will have a purchase button that will take money out from purchasing user and add that amount to the owner of plan
    -just a simple transaction.

### Back-End
|Path|HTTP Verb|Meaning|
|----|---------|-------|
| /api/user/signup | post | sign up a user |