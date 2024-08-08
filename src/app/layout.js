import "../styles/globals.css";
import AuthProvider from "@/utility/nextauth-session-provider";

export default async function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}
// import { ThemeProvider } from "@/shadcn/theme-provider";
// import "../styles/globals.css";
// import Navbar from "@/components/layout/navbar";
// import AuthProvider from "@/utility/nextauth-session-provider";

// export const metadata = {
//   title: "skillear",
//   description: "Platform for content creators to share knowledge",
// };

// export default async function RootLayout({ children }) {
//   const userLoggedIn = true;

//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body className=" ">
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {userLoggedIn && <Navbar />}
//             <AuthProvider>{children}</AuthProvider>
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   );
// }
