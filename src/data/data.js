import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";


export const navigationLinks = [
  { id: 1, title: 'Home', image: iconsImgs.home, path: '/home' },
  { id: 2, title: 'Users', image: iconsImgs.budget, path: '/users' },
  { id: 3, title: 'All Roles', image: iconsImgs.plane, path: '/roles' },
  { id: 4, title: 'User Management', image: iconsImgs.wallet, path: '/user-management' },
  { id: 5, title: 'Permissions', image: iconsImgs.wealth, path: '/permissions' },
];

export const transactions = [
    {
        id: 11, 
        name: "Sanya Singh",
        image: personsImgs.person_one,
        date: "23/12/01",
        amount: 1800000 // Amount in INR
    },
    {
        id: 12, 
        name: "Riya Verma",
        image: personsImgs.person_two,
        date: "23/11/19",
        amount: 2200000 // Amount in INR
    },
    {
        id: 13, 
        name: "Ananya Rathi",
        image: personsImgs.person_three,
        date: "23/10/25",
        amount: 1500000 // Amount in INR
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jun",
        value1: 50,
        value2: null
    },
    {
        id: 15,
        month: "Jul",
        value1: 60,
        value2: 55
    },
    {
        id: 16,
        month: "Aug",
        value1: 50,
        value2: 45
    },
    {
        id: 17,
        month: "Sep",
        value1: 65,
        value2: 60
    },
    {
        id: 18,
        month: "Oct",
        value1: 40,
        value2: 50
    }
];

export const budget = [
    {
        id: 19, 
        title: "Mobile Bills",
        type: "Automated",
        amount: 15000 // Amount in INR
    },
    {
        id: 20, 
        title: "Home Rent",
        type: "Automated",
        amount: 25000 // Amount in INR
    },
    {
        id: 21, 
        title: "Entertainment",
        type: "Automated",
        amount: 10000 // Amount in INR
    },
    {
        id: 22, 
        title: "Groceries",
        type: null,
        amount: 12000 // Amount in INR
    },
    {
        id: 23, 
        title: "Fuel Expenses",
        type: null,
        amount: 7000 // Amount in INR
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "Spotify",
        due_date: "23/12/05",
        amount: 3000 // Amount in INR
    },
    {
        id: 25,
        title: "Amazon Prime",
        due_date: "23/12/15",
        amount: 4999 // Amount in INR
    },
    {
        id: 26,
        title: "Disney+ Hotstar",
        due_date: "23/12/28",
        amount: 999 // Amount in INR
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_four,
        saving_amount: 15000, // Amount in INR
        title: "Save for Vacation",
        date_taken: "23/11/25",
        amount_left: 25000 // Amount in INR
    }
];

export const usersData = [
    {
      name: 'Neha Kapoor',
      email: 'neha.kapoor@example.com',
      dob: '1985-03-10',
      phone: '9998776655',
      role: 'Admin',
      permissions: 'Full Access',
    },
    {
      name: 'Sandeep Mehta',
      email: 'sandeep.mehta@example.com',
      dob: '1990-08-21',
      phone: '9988776655',
      role: 'Editor',
      permissions: 'Edit, View',
    },
    {
      name: 'Madhuri Joshi',
      email: 'madhuri.joshi@example.com',
      dob: '1993-12-05',
      phone: '9876655443',
      role: 'Viewer',
      permissions: 'View Only',
    },
];
