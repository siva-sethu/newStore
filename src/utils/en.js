import { color } from "../theme";

export const English = {
  merchant_screen: {
    heading: 'Merchant Login',
    button_text: 'Login',
    image_text: 'Store+',
    place_holder_text: "Enter Merchant ID"
  },
  otp_screen: {
    image_text: 'Store+',
    heading: 'OTP Verification',
    button_text: 'Verify',
    bottom_text: 'Enter the OTP sent to the registered phone',
    error_message: 'Invalid OTP',
    Otp_message: "Resend OTP"
  },
  menu_Screen:{
  heading:"Select Store",
  one:"Seattle Branch",
  two:"Bellevue Branch",
  three:"Tacoma Branch"
  },
  selectapp_screen: {
    heading: 'Select App',
    left_text: 'Token app',
    right_text: 'Menu app',
    pos_text: "POS app",
    kds_text: "KDS app",
    store_text:"Store app"
  },
  add_tv_screen: {
    heading: 'Enter TV Name',
    placeholder_text: 'Enter TV Name',
    button_text: 'Add TV'
  },
  entercode_screen: {
    heading: 'Enter Code for ',
    button_text: 'Connect',
    place_holder_text:'Enter Code'
  },
 pos_screen:{
  heading: 'Enter POS Code for ',
  button_text: 'Add POS',
  place_holder_text:'Enter POS Code'
 },
 posname_screen:{
  heading:"Enter POS Name",
  place_holder_text:"Enter POS Name",
  buuton_text:"next"
 },
 poscode_screen:{
  heading:"Enter Token Displayed On Token app",
  place_holder_text:"Enter POS Code",
  buuton_text:"next",
 },
 posterminal_screen:{
  heading:"Enter Terminal Serial Number",
  place_holder_text:"Enter Terminal Serial Number",
  buton_text:"connect",
 },
  token_customisation: {
    heading: "Token CustomiZation",
    switch_name_one: "Show Name",
    switch_name_two: "Total Announcement",
    image_heading: "Layout",

  },
  store_screen: {
    heading: "Select Store"
  },
  clerk_screen: {
    heading: 'Clerk PIN',
    button_text: 'Login',
    bottom_text: 'Want to login as a Merchant?',
    bottom_link: 'Click here',
    tocken_lost_tost: `Merchant Token is lost, first login merchant and then try again using clerk pin.`,
  },
  
  settings_screen: {

    heading: "Settings",
    sub_heading_one: 'Show Name',
    sub_heading_two: "Token Customisation",
    sub_heading_three: "Acceptance of Use",
    sub_heading_four: "Logout",
    store: "Select Store"



  },
  orders_tab: {
    table_heading: [
      'Date / Time',
      'Order ID',
      'Pay Type',
      'Order Status',
      'Amount',
      'Order Type',
    ],
    search_placeholder: 'Search Order',
    table_loading_text: 'Loading More',
    table_row_finished_text: 'No more orders',
  },
  pos_tab: {
    search_placeholder: 'Search by item name',
    item_totals: {
      subtotal: 'Subtotal',
      tax: 'Tax',
      total: 'Total',
    },
    select_item_tost: 'Please select Items',
    kot_successMessage: 'Order sent to kitchen',
  },
  modals: {
    paymentModal: {
      heading: 'Card',
      heading2: 'Cash',
      amount: [1, 5, 10, 20, 50, ''],
      total_count: {
        text: 'Total Amount',
        text2: 'Tendered Amount',
        text3: 'Balance Due',
        text4: 'Change Due',
      },
      buttons: {
        button_text: 'Clear',
        button_text2: 'Cancel',
        button_text3: 'Continue',
      },
      amount_error_tost: 'Tendered amount is not sufficient',
    },
    customer_details: {
      heading: 'Dine-In',
      heading2: 'Take-Out',
      label: 'Name',
      label2: 'Phone Number',
      buttons: {
        button_text: 'Cancel',
        button_text2: 'Continue',
      },
      name_empty_tost: 'Name is required to track order',
      name_valid_tost: 'Name should contain only letters and spaces',
    },
    order_summary: {
      text: 'Order',
      text2: 'Pending',
      total_count: {
        text: 'Subtotal',
        text2: 'Tax',
        text3: 'Total',
      },
      buttons: {
        button_text: 'Cancel',
        button_text2: 'Submit KOT',
        button_text3: 'Close',
      },
    },
  },
  sidebar: {
    text: 'POS',
    text2: 'Orders',
    text3: 'Settings',
    text4: 'Logout',
    sidebar_defalt_logo:
      'https://storage.googleapis.com/jagopos-backend-mern.appspot.com/jagopos/images/merchants/default/logos/logo-large-default%20(250%20x%20100%20px).png',
  },
  test_data: {
    store_id: '23423434324',
    login_id: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    otp_id: ['1', '2', '3', '4', '5', '6']
  },
  store_list: {
    select_store_tost: 'Please select a store',
  },
  uiTable: {
    uiItem1: ['Large Pictures', 'Small Pictures', 'No Pictures'],
    uiItem2: ['Left Panel', 'Right Panel'],
    uiItem3: ['On', 'Off'],
  },
};
