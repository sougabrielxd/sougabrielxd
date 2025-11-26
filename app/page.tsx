// App.tsx
"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext"; // ⬅️ Importado aqui
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Rota final de fallback */}
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={true}>
        <LanguageProvider>
          {" "}
          {/* ✅ Provider adicionado aqui */}
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
