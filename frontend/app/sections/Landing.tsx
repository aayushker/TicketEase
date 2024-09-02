import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <LibraryIcon className="h-6 w-6" />
          <span className="sr-only">Indian Museums</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Explore
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Book
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover India's Finest Museums
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore a rich tapestry of art, history, and culture at
                    India's most captivating museums. Plan your visit with our
                    easy-to-use booking platform.
                  </p>
                </div>
                <form className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Search museums by name or location"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
              <Carousel
                className="w-full max-w-md"
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img
                              src={`${image}`}
                              alt={`Hero ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 px-6 md:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured Museums
              </h2>
              <p className="text-muted-foreground">
                Explore our top-rated museums across India.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img
                  src="/nationalMuseum.avif"
                  width={400}
                  height={300}
                  alt="Museum Image"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">National Museum</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Explore India's rich cultural heritage at the National
                    Museum in New Delhi.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LocateIcon className="w-4 h-4" />
                      New Delhi
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/shivaji.webp"
                  width={400}
                  height={300}
                  alt="Museum Image"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">
                    Chhatrapati Shivaji Terminus
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover the architectural marvel of Chhatrapati Shivaji
                    Terminus in Mumbai.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LocateIcon className="w-4 h-4" />
                      Mumbai
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/salarjung.avif"
                  width={400}
                  height={300}
                  alt="Museum Image"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Salar Jung Museum</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Explore the world's largest one-man collection at the Salar
                    Jung Museum in Hyderabad.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LocateIcon className="w-4 h-4" />
                      Hyderabad
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/artmuseum.jpg"
                  width={400}
                  height={300}
                  alt="Museum Image"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">
                    Calicut Beach Museum
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover the rich maritime history of India at the Calicut
                    Beach Museum in Kerala.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LocateIcon className="w-4 h-4" />
                      Kerala
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Explore Museums by Location
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our collection of museums across India, from the bustling
                cities to the serene countryside.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore by Location
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore by Category
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full px-5 py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contact Us
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Have a Question? Get in Touch.
                </h2>
                <form className="grid gap-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" />
                  <Button className="w-full">Submit</Button>
                </form>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Visit Us
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our museums are located across India, from the bustling cities
                  to the serene countryside. Plan your visit and explore the
                  rich cultural heritage of our nation.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Find a Museum
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              size="icon"
              className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
            >
              <MessageCircleIcon className="w-6 h-6" />
              <span className="sr-only">Open Chatbot</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-full max-w-md">
            <DrawerHeader>
              <h3 className="text-xl font-bold">This is your tic</h3>
            </DrawerHeader>
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="shrink-0">
                    <AvatarImage src="/placeholder-user.jpg" alt="Chatbot" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-muted rounded-lg p-4">
                    <p>
                      Hello! I'm the Museum Booking Chatbot. How can I assist
                      you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="flex-1 bg-primary text-primary-foreground rounded-lg p-4">
                    <p>I'd like to book tickets for the National Museum.</p>
                  </div>
                  <Avatar className="shrink-0">
                    <AvatarImage src="/placeholder-user.jpg" alt="You" />
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Indian Museums. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function LibraryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

function WebcamIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}
