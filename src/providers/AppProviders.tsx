import ThemeProvider from "./ThemeProvider";
interface props{
    children:React.ReactNode;
}
export default function AppProviders({children}:props) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
