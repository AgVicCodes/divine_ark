import { useState, useMemo } from 'react';

import { Link } from 'react-router';
import { useCart } from '../context/cart_context';

import { products, categories, sizeLabels, type Product, type Price } from '../data/products';

const PER_PAGE = 9

function formatPrice(price: Price) {
  if (!price) return null
  if ('fixed' in price) return `£${price.fixed.toFixed(2)}`
  return `£${price.min.toFixed(2)} – £${price.max.toFixed(2)}`
}

function getVariants(product: Product) {
  if (!product.hasVariants || !product.price || 'fixed' in product.price) return []
  const { min, max } = product.price
  const mid = Math.round(((min + max) / 2) / 5) * 5
  const [l1, l2, l3] = sizeLabels[product.category] ?? ['Small', 'Medium', 'Large']
  return [
    { label: l1, price: min },
    { label: l2, price: mid },
    { label: l3, price: max },
  ]
}

// ---- Product Variant Modal ----
interface VariantModalProps {
  product: Product
  onClose: () => void
}

function VariantModal({ product, onClose }: VariantModalProps) {
  const variants = getVariants(product)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [qty, setQty] = useState(1)
  const { addItem, setIsOpen } = useCart()

  const selected = variants[selectedIndex]

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      variant: selected.label,
      price: selected.price,
      quantity: qty,
    })
    onClose()
    setIsOpen(true)
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-[80] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-ark-surface border border-ark-border shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-ark-border">
          <h3 className="font-serif text-lg text-ark-cream">{product.name}</h3>
          <button
            onClick={onClose}
            className="text-ark-cream-muted hover:text-ark-cream transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-[16/9] overflow-hidden bg-ark-muted mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs tracking-[0.2em] uppercase text-ark-gold font-sans mb-4">
            Select a Size
          </p>

          <div className="grid grid-cols-3 gap-2 mb-6">
            {variants.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setSelectedIndex(i)}
                className={`py-3 px-2 border text-center transition-all duration-200 ${
                  selectedIndex === i
                    ? 'border-ark-gold bg-ark-gold/10 text-ark-cream'
                    : 'border-ark-border text-ark-cream-muted hover:border-ark-gold/50 hover:text-ark-cream'
                }`}
              >
                <span className="block text-xs font-sans tracking-wide">{v.label}</span>
                <span className="block font-serif text-sm mt-0.5 text-ark-gold">£{v.price.toFixed(2)}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-ark-cream-muted font-sans">Quantity</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 border border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold transition-colors flex items-center justify-center"
              >
                −
              </button>
              <span className="w-8 text-center text-ark-cream font-sans tabular-nums">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 border border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold transition-colors flex items-center justify-center"
              >
                +
              </button>
            </div>
            <span className="ml-auto font-serif text-ark-cream text-lg">
              £{(selected.price * qty).toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className="w-full py-3.5 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium hover:bg-ark-gold-light transition-colors duration-300 font-sans"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

// ---- Read More Modal ----
function ReadMoreModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[80] backdrop-blur-sm" onClick={onClose} />
      <div className="fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-ark-surface border border-ark-border shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-ark-border">
          <h3 className="font-serif text-lg text-ark-cream">{product.name}</h3>
          <button onClick={onClose} className="text-ark-cream-muted hover:text-ark-cream transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="aspect-[16/9] overflow-hidden bg-ark-muted mb-6">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <p className="text-ark-cream-muted font-sans font-light text-sm leading-relaxed mb-6">
            This is a bespoke item tailored to your event's specific needs. Pricing and serving sizes
            depend on guest count, occasion, and customisation. Reach out to our team for a personalised
            quote — we'll make it unforgettable.
          </p>
          <a
            href="/#contact"
            onClick={onClose}
            className="block w-full py-3.5 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium hover:bg-ark-gold-light transition-colors duration-300 font-sans text-center"
          >
            Contact Us to Order
          </a>
        </div>
      </div>
    </>
  )
}

// ---- Product Card ----
interface ProductCardProps {
  product: Product
  onSelectOptions: (p: Product) => void
  onReadMore: (p: Product) => void
}

function ProductCard({ product, onSelectOptions, onReadMore }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart()
  const priceStr = formatPrice(product.price)

  const handleDirectAdd = () => {
    if (!product.price || !('fixed' in product.price)) return
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price.fixed,
      quantity: 1,
    })
    setIsOpen(true)
  }

  return (
    <div className="group bg-ark-surface border border-ark-border hover:border-ark-gold/40 transition-all duration-300 flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-ark-muted shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-ark-gold text-[10px] tracking-[0.25em] uppercase font-sans mb-2 block">
          {product.category}
        </span>
        <h3 className="font-serif text-base text-ark-cream mb-2 leading-snug">{product.name}</h3>

        {priceStr ? (
          <p className="text-ark-cream-muted text-sm font-sans mb-4">{priceStr}</p>
        ) : (
          <p className="text-ark-cream-muted text-sm font-sans mb-4 italic">Price on request</p>
        )}

        <div className="mt-auto">
          {product.readMore ? (
            <button
              onClick={() => onReadMore(product)}
              className="w-full py-2.5 border border-ark-border text-ark-cream-muted text-xs tracking-[0.2em] uppercase font-sans hover:border-ark-gold hover:text-ark-gold transition-all duration-200"
            >
              Read More
            </button>
          ) : product.hasVariants ? (
            <button
              onClick={() => onSelectOptions(product)}
              className="w-full py-2.5 border border-ark-gold text-ark-gold text-xs tracking-[0.2em] uppercase font-sans hover:bg-ark-gold hover:text-ark-bg transition-all duration-200"
            >
              Select Options
            </button>
          ) : (
            <button
              onClick={handleDirectAdd}
              className="w-full py-2.5 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium font-sans hover:bg-ark-gold-light transition-colors duration-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ---- Pagination ----
interface PaginationProps {
  page: number
  total: number
  perPage: number
  onChange: (p: number) => void
}

function Pagination({ page, total, perPage, onChange }: PaginationProps) {
  const pageCount = Math.ceil(total / perPage)
  if (pageCount <= 1) return null

  const pages: (number | '…')[] = []
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || (i >= page - 1 && i <= page + 1)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…')
    }
  }

  const btnBase =
    'w-9 h-9 flex items-center justify-center text-sm font-sans border transition-all duration-200'

  return (
    <div className="flex items-center justify-center gap-1.5 pt-12">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btnBase} border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Previous page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-ark-cream-muted text-sm font-sans">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`${btnBase} ${
              p === page
                ? 'bg-ark-gold border-ark-gold text-ark-bg font-medium'
                : 'border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount}
        className={`${btnBase} border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Next page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

// ---- Main Page ----
export default function OrdersPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [sort, setSort] = useState<'default' | 'asc' | 'desc' | 'az'>('default')
  const [page, setPage] = useState(1)
  const [variantProduct, setVariantProduct] = useState<Product | null>(null)
  const [readMoreProduct, setReadMoreProduct] = useState<Product | null>(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : [...products]

    if (sort === 'az') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === 'asc') {
      list.sort((a, b) => {
        const pa = a.price ? ('fixed' in a.price ? a.price.fixed : a.price.min) : 0
        const pb = b.price ? ('fixed' in b.price ? b.price.fixed : b.price.min) : 0
        return pa - pb
      })
    } else if (sort === 'desc') {
      list.sort((a, b) => {
        const pa = a.price ? ('fixed' in a.price ? a.price.fixed : a.price.max) : 0
        const pb = b.price ? ('fixed' in b.price ? b.price.fixed : b.price.max) : 0
        return pb - pa
      })
    }
    return list
  }, [activeCategory, sort])

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleCategoryClick = (cat: string | null) => {
    setActiveCategory(cat)
    setPage(1)
    setMobileFiltersOpen(false)
  }

  const handleSort = (s: typeof sort) => {
    setSort(s)
    setPage(1)
  }

  const Sidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs tracking-[0.25em] uppercase text-ark-cream font-sans mb-5">
          Categories
        </h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => handleCategoryClick(null)}
              className={`w-full flex items-center justify-between py-2 px-3 text-sm font-sans transition-colors text-left ${
                activeCategory === null
                  ? 'bg-ark-gold/10 text-ark-gold border-l-2 border-ark-gold pl-2.5'
                  : 'text-ark-cream-muted hover:text-ark-cream'
              }`}
            >
              <span>All Products</span>
              <span className="text-xs opacity-60">({products.length})</span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => handleCategoryClick(cat.name)}
                className={`w-full flex items-center justify-between py-2 px-3 text-sm font-sans transition-colors text-left ${
                  activeCategory === cat.name
                    ? 'bg-ark-gold/10 text-ark-gold border-l-2 border-ark-gold pl-2.5'
                    : 'text-ark-cream-muted hover:text-ark-cream'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs opacity-60">({cat.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-ark-border pt-6">
        <p className="text-xs text-ark-cream-muted font-sans leading-relaxed">
          All items are freshly prepared to order. Minimum lead time of 48 hours for most items.{' '}
          <Link to="/#contact" className="text-ark-gold hover:underline">
            Contact us
          </Link>{' '}
          for same-day availability.
        </p>
      </div>
    </div>
  )

  return (
    <div className="pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-ark-surface border-b border-ark-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 text-xs font-sans text-ark-cream-muted mb-4">
            <Link to="/" className="hover:text-ark-gold transition-colors">
              Home
            </Link>
            <span className="text-ark-border">›</span>
            <span className="text-ark-cream">Orders</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-ark-cream mb-3">Order Online</h1>
          <p className="text-ark-cream-muted font-sans font-light text-base max-w-xl">
            Authentic Nigerian cuisine and celebration food, freshly prepared and delivered to your door.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="lg:grid lg:grid-cols-[260px_1fr] gap-12">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </aside>

          {/* Main content */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-ark-border text-ark-cream-muted text-xs tracking-[0.15em] uppercase font-sans hover:border-ark-gold hover:text-ark-gold transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  Filters
                </button>
                <p className="text-ark-cream-muted text-sm font-sans">
                  {filtered.length} item{filtered.length !== 1 ? 's' : ''}
                  {activeCategory ? ` in ${activeCategory}` : ''}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs tracking-[0.15em] uppercase text-ark-cream-muted font-sans hidden sm:block">
                  Sort:
                </span>
                <select
                  value={sort}
                  onChange={(e) => handleSort(e.target.value as typeof sort)}
                  className="bg-ark-surface border border-ark-border text-ark-cream text-xs px-3 py-2 font-sans focus:outline-none focus:border-ark-gold transition-colors"
                >
                  <option value="default">Default</option>
                  <option value="az">Name: A–Z</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Mobile filters drawer */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-8 p-6 bg-ark-surface border border-ark-border">
                <Sidebar />
              </div>
            )}

            {/* Active filter pill */}
            {activeCategory && (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-ark-cream-muted text-xs font-sans">Filtering by:</span>
                <button
                  onClick={() => handleCategoryClick(null)}
                  className="flex items-center gap-1.5 px-3 py-1 bg-ark-gold/15 border border-ark-gold/30 text-ark-gold text-xs font-sans hover:bg-ark-gold/25 transition-colors"
                >
                  {activeCategory}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Product grid */}
            {paginated.length === 0 ? (
              <div className="text-center py-24 text-ark-cream-muted font-sans">
                No products found in this category.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paginated.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectOptions={setVariantProduct}
                    onReadMore={setReadMoreProduct}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            <Pagination
              page={page}
              total={filtered.length}
              perPage={PER_PAGE}
              onChange={(p) => {
                setPage(p)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {variantProduct && (
        <VariantModal product={variantProduct} onClose={() => setVariantProduct(null)} />
      )}
      {readMoreProduct && (
        <ReadMoreModal product={readMoreProduct} onClose={() => setReadMoreProduct(null)} />
      )}
    </div>
  )
}
