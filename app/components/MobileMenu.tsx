import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button>
                <Menu className="w-4 h-4"/>
            </Button>

        </SheetTrigger>
    </Sheet>;
  ),
  
  
}
