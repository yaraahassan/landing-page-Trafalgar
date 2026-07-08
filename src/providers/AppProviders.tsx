import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

interface props{
    children:React.ReactNode;
}
export default function AppProviders({children}:props) {
  return (
    <ThemeProvider>
       <ReactQueryProvider>{children}
         </ReactQueryProvider>
      </ThemeProvider>
  )
}
