type RegisterFormControl = {
  name: string;
  label: string;
  placeholder?: string;
  componentType: "input";
  type?: string;
};

export const registerFormControls: RegisterFormControl[] = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
type LoginFormControl = {
  name: string;
  label: string;
  placeholder?: string;
  componentType: "input";
  type?: string;
};
export const loginFormControls: LoginFormControl[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "earphone", label: "Earphone" },
      { id: "mobile", label: "Mobile" },
      { id: "watch", label: "Watch" },
      { id: "television", label: "Television" },
      { id: "laptop", label: "Laptop" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sony", label: "Sony" },
      { id: "jbl", label: "Jbl" },
      { id: "oneplus", label: "OnePlus" },
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "panasonic", label: "Panasonic" },
      { id: "nothingphone", label: "Nothing Phone" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "earphone",
    label: "EarPhone",
    path: "/shop/listing",
  },
  {
    id: "mobile",
    label: "Mobile",
    path: "/shop/listing",
  },
  {
    id: "watch",
    label: "Watch",
    path: "/shop/listing",
  },
  {
    id: "television",
    label: "television",
    path: "/shop/listing",
  },
  {
    id: "laptop",
    label: "Laptop",
    path: "/shop/listing",
  },
  // {
  //   id: "search",
  //   label: "Search",
  //   path: "/shop/search",
  // },
];
export type FilterOptionItem = {
  id: string;
  label: string;
};
export type FilterOptions = {
  category: FilterOptionItem[];
  brand: FilterOptionItem[];
};

export const filterOptions: FilterOptions = {
  category: [
    { id: "earphone", label: "Earphone" },
    { id: "mobile", label: "Mobile" },
    { id: "watch", label: "Watch" },
    { id: "television", label: "Television" },
    { id: "laptop", label: "Laptop" },
  ],
  brand: [
    { id: "sony", label: "Sony" },
    { id: "jbl", label: "Jbl" },
    { id: "oneplus", label: "OnePlus" },
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "panasonic", label: "Panasonic" },
    { id: "nothing", label: "Nothing Phone" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
