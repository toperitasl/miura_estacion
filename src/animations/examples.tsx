/**
 * EJEMPLOS DE USO — sirve también como "storybook" manual.
 * Importa <AnimationShowcase /> en cualquier ruta para verlos todos.
 */
import { useRef } from "react";
import {
  Reveal,
  StaggerList,
  ProductCard,
  JuicyButton,
  HeroStagger,
  HeroItem,
  HeroMedia,
  ProductGridSkeleton,
  FlyToCartProvider,
  useFlyToCart,
  useFlyToCartTarget,
} from "./index";

/* ─────────────────────────────────────────
   1. HERO — stagger con texto e imagen
   ───────────────────────────────────────── */
export const ExampleHero = () => (
  <HeroStagger className="grid grid-cols-1 md:grid-cols-2 gap-10 py-24 px-6">
    <div className="flex flex-col justify-center gap-6">
      <HeroItem>
        <h1 className="text-6xl font-display text-primary">MIURA BURGER</h1>
      </HeroItem>
      <HeroItem>
        <p className="text-muted-foreground max-w-md">
          Smash burgers brutales hechos en Estacion de Cartama.
        </p>
      </HeroItem>
      <HeroItem>
        <JuicyButton size="lg">Reservar mesa</JuicyButton>
      </HeroItem>
    </div>
    <HeroMedia>
      <img
        src="/placeholder.svg"
        alt=""
        className="w-full rounded-2xl object-cover"
      />
    </HeroMedia>
  </HeroStagger>
);

/* ─────────────────────────────────────────
   2. REVEAL — cualquier bloque al hacer scroll
   ───────────────────────────────────────── */
export const ExampleReveal = () => (
  <section className="py-32 px-6">
    <Reveal from="up">
      <h2 className="text-4xl font-display text-center">Nuestra historia</h2>
    </Reveal>
    <Reveal from="up" delay={0.1}>
      <p className="max-w-xl mx-auto mt-4 text-center text-muted-foreground">
        El texto aparece justo después del título, con delay encadenado.
      </p>
    </Reveal>
    <Reveal from="left" delay={0.2}>
      <p>Entra desde la izquierda.</p>
    </Reveal>
  </section>
);

/* ─────────────────────────────────────────
   3. LISTA DE PRODUCTOS — stagger + cards con tilt
   ───────────────────────────────────────── */
type Burger = { id: string; name: string; price: string; img: string };

const burgers: Burger[] = [
  { id: "1", name: "Smash Miura", price: "9.50", img: "/placeholder.svg" },
  { id: "2", name: "Crispy Chicken", price: "9.50", img: "/placeholder.svg" },
  { id: "3", name: "Miura XL", price: "13.50", img: "/placeholder.svg" },
  { id: "4", name: "Hot Dog Canalla", price: "8.50", img: "/placeholder.svg" },
];

export const ExampleProductList = () => {
  const fly = useFlyToCart();

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-display mb-8">Nuestras burgers</h2>
      </Reveal>

      <StaggerList
        items={burgers}
        getKey={(b) => b.id}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        renderItem={(b) => (
          <ProductCard className="bg-secondary/40 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer">
            <img
              src={b.img}
              alt={b.name}
              className="aspect-square w-full object-cover rounded-xl"
              // preserve-3d → imagen flota encima al tiltar
              style={{ transform: "translateZ(30px)" }}
            />
            <h3 className="font-heading text-lg tracking-wide">{b.name}</h3>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-primary font-heading text-xl">{b.price}€</span>
              <JuicyButton
                size="sm"
                onClick={(e) => {
                  // El botón hace el efecto press automaticamente, y lanzamos la animación
                  const card = (e.currentTarget as HTMLElement).closest(
                    "[data-product-card]",
                  ) as HTMLElement | null;
                  if (card) fly({ from: card, imageSrc: b.img });
                }}
              >
                Añadir
              </JuicyButton>
            </div>
          </ProductCard>
        )}
      />
    </section>
  );
};

/* ─────────────────────────────────────────
   4. SKELETON loading — mientras carga la API
   ───────────────────────────────────────── */
export const ExampleSkeleton = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-display mb-8">Cargando...</h2>
    <ProductGridSkeleton count={6} />
  </section>
);

/* ─────────────────────────────────────────
   5. CART ICON — registrado como destino del fly-to-cart
   ───────────────────────────────────────── */
export const CartIcon = () => {
  const ref = useFlyToCartTarget();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="fixed top-4 right-4 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading shadow-lg z-50"
    >
      🛒
    </div>
  );
};

/* ─────────────────────────────────────────
   6. APP — todo junto
   ───────────────────────────────────────── */
export const AnimationShowcase = () => (
  <FlyToCartProvider>
    <CartIcon />
    <ExampleHero />
    <ExampleReveal />
    <ExampleProductList />
    <ExampleSkeleton />
  </FlyToCartProvider>
);
