// "use client"

// import { createContext, useContext, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const { data: session, status } = useSession();
//   const [userRole, setUserRole] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") return;

//     if (session) {
//       setUserRole(session.user.role);
//     } else {
//       router.push("/auth/signin");
//     }
//   }, [session, status, router]);

//   const value = { userRole, status };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
