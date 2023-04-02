import { CounterList } from "@/lib/types";

const counterList = new CounterList([
  {
    id: 1,
    icon: "flaticon-online",
    count: 400,
    text: "Online Courses",
  },
  {
    id: 2,
    icon: "flaticon-graduated",
    count: 4500,
    text: "Students Enrolled",
  },
  {
    id: 3,
    icon: "flaticon-instructor",
    count: 1200,
    text: "Expert Instructors",
  },
  {
    id: 4,
    icon: "flaticon-tools",
    count: 300,
    text: "Hours Content",
  },
]);

export { counterList };
