"use client";

const INITIAL_USERS = [
  // Admin
  { 
    id: "ADM-001",
    role: "admin", 
    email: "admin@gmail.com", 
    password: "123", 
    name: "مدير النظام", 
    course: "", 
    redirect: "/admin/dashboard" 
  },

  // Teachers
  { 
    id: "TCH-001",
    role: "teacher", 
    email: "quran@gmail.com", 
    password: "123", 
    name: "معلم ركن القرآن", 
    course: "ركن القرآن الكريم", 
    redirect: "/teacher/profile" 
  },
  { 
    id: "TCH-002",
    role: "teacher", 
    email: "arabic@gmail.com", 
    password: "123", 
    name: "معلم العربية", 
    course: "اللغة العربية لغير الناطقين", 
    redirect: "/teacher/profile" 
  },
  { 
    id: "TCH-003",
    role: "teacher", 
    email: "curricula@gmail.com", 
    password: "123", 
    name: "معلم المناهج الدراسية", 
    course: "المناهج الدراسية", 
    redirect: "/teacher/profile" 
  },

  // Students - 3 for each
  { 
    id: "QUR-001", 
    role: "student", 
    email: "student1@gmail.com", 
    password: "123", 
    name: "طالب ركن القرآن", 
    course: "ركن القرآن الكريم", 
    age: 10, 
    level: "الجزء الأول",
    joinDate: "15 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "QUR-002", 
    role: "student", 
    email: "s_quran2@gmail.com", 
    password: "123", 
    name: "عمر ركن القرآن", 
    course: "ركن القرآن الكريم", 
    age: 12, 
    level: "الجزء الثاني",
    joinDate: "20 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "QUR-003", 
    role: "student", 
    email: "s_quran3@gmail.com", 
    password: "123", 
    name: "فاطمة ركن القرآن", 
    course: "ركن القرآن الكريم", 
    age: 9, 
    level: "التحفة السنية",
    joinDate: "01 فبراير 2026",
    redirect: "/student/profile" 
  },

  { 
    id: "ARB-001", 
    role: "student", 
    email: "student2@gmail.com", 
    password: "123", 
    name: "طالب العربية", 
    course: "اللغة العربية لغير الناطقين", 
    age: 11, 
    level: "المستوى الأول",
    joinDate: "15 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "ARB-002", 
    role: "student", 
    email: "s_arabic2@gmail.com", 
    password: "123", 
    name: "عمر العربية", 
    course: "اللغة العربية لغير الناطقين", 
    age: 13, 
    level: "المستوى الثاني",
    joinDate: "20 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "ARB-003", 
    role: "student", 
    email: "s_arabic3@gmail.com", 
    password: "123", 
    name: "فاطمة العربية", 
    course: "اللغة العربية لغير الناطقين", 
    age: 8, 
    level: "المستوى الأول",
    joinDate: "01 فبراير 2026",
    redirect: "/student/profile" 
  },

  { 
    id: "CUR-001", 
    role: "student", 
    email: "student3@gmail.com", 
    password: "123", 
    name: "طالب المناهج", 
    course: "المناهج الدراسية", 
    age: 10, 
    level: "الصف الرابع",
    joinDate: "15 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "CUR-002", 
    role: "student", 
    email: "s_curr2@gmail.com", 
    password: "123", 
    name: "عمر المناهج", 
    course: "المناهج الدراسية", 
    age: 12, 
    level: "الصف السادس",
    joinDate: "20 يناير 2026",
    redirect: "/student/profile" 
  },
  { 
    id: "CUR-003", 
    role: "student", 
    email: "s_curr3@gmail.com", 
    password: "123", 
    name: "فاطمة المناهج", 
    course: "المناهج الدراسية", 
    age: 9, 
    level: "الصف الثالث",
    joinDate: "01 فبراير 2026",
    redirect: "/student/profile" 
  },
];

export const getLocalUsers = () => {
    if (typeof window === "undefined") return INITIAL_USERS;
    const stored = localStorage.getItem("app_users");
    if (!stored) {
        localStorage.setItem("app_users", JSON.stringify(INITIAL_USERS));
        return INITIAL_USERS;
    }
    return JSON.parse(stored);
};

export const saveUser = (user) => {
    const users = getLocalUsers();
    const newUser = {
        ...user,
        id: Date.now().toString(),
        age: user.age || 10,
        level: user.level || (user.role === "student" ? "مستوى جديد" : ""),
        joinDate: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
        redirect: user.role === "admin" ? "/admin/dashboard" : (user.role === "teacher" ? "/teacher/profile" : "/student/profile")
    };
    const updated = [...users, newUser];
    localStorage.setItem("app_users", JSON.stringify(updated));
    return newUser;
};

export const deleteUser = (id) => {
    const users = getLocalUsers();
    const updated = users.filter(u => u.id !== id && u.email !== id);
    localStorage.setItem("app_users", JSON.stringify(updated));
};

export const updateUser = (updatedUser) => {
    const users = getLocalUsers();
    const updated = users.map(u => (u.id === updatedUser.id || u.email === updatedUser.email) ? { ...u, ...updatedUser } : u);
    localStorage.setItem("app_users", JSON.stringify(updated));
};
