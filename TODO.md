Tasks:
 - ORDER PAGE
   - Display all of the pizzas on the screen
   - Allow users to add or remove each pizza they would like to order
   - FOR BASE MODE -> ONLY ONE OF EACH PIZZA IN CART
   - Next button to move user to the order details page
 - DETAILS PAGE
   - Collect information (name, street, city, zip)
   - pick up or delivery toggle
   - next button to move user to the checkout page
 - CHECKOUT PAGE
   - buyer information ------ Delivery/Pickup
   - pizzas to be bought table
   - checkout button -> POST TO THE DATABASE -> NAVIGATE USER BACK to Order page
 - ADMIN PAGE
   - Not in the navigation bar.
   - Display orders (admin table???)


COMPONENTS:
 - Layout
   - Header
   - NavBar
   - <Outlet />
 - Order Page -> "Home page"
   - PizzaList
     - PizzaItem
 - Customer Info -> Page
   - CustomerForm
 - Checkout -> Page
   - CustomerOrderTable
 - Admin Page
   - OrderHistoryTable


REDUX REDUCERS:
- Pizza
- Orders


BRANCHING TEAMS & PLAN:
 - Order page - PizzaList and PizzaItem component -> one group (Vang, Luis, Eli)
   - Customer Info Page & Customer Form Component -> one group (Anders, Mandi)

 - Once we get both of those worked out:
   - we gather back
     - one group does checkout page
     - one group does admin page