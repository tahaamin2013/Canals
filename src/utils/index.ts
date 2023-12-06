import { FormControlItem, MenuItem } from "./types";
import { Option } from "./types";

export const menuItems : MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];


export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];


export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCsOBF_eOY641nIDnSRkgi72idGnsvnafY",
  authDomain: "nextjs-blog-typescript-2-2f402.firebaseapp.com",
  projectId: "nextjs-blog-typescript-2-2f402",
  storageBucket: "nextjs-blog-typescript-2-2f402.appspot.com",
  messagingSenderId: "456129573776",
  appId: "1:456129573776:web:d5648d92e4fab1db2ff915",
  measurementId: "G-18R9Z8WFDF"
};

export const initialBlogFormData = {
  title :  '',
  description : '',
  image : '',
  category : '' 
 }