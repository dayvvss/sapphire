"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CartItem, Order, OrderStatus, Product } from "@/types";

const CART_KEY = "sapphire.cart";
const ORDER_KEY = "sapphire.orders";

const readStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }
  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeStorage = (key: string, value: unknown) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getCart = () => readStorage<CartItem[]>(CART_KEY, []);
export const saveCart = (items: CartItem[]) => writeStorage(CART_KEY, items);

export const getOrders = () => readStorage<Order[]>(ORDER_KEY, []);
export const saveOrders = (orders: Order[]) => writeStorage(ORDER_KEY, orders);

export const addToCart = (product: Product, qty = 1) => {
  const items = getCart();
  const existing = items.find((item) => item.product.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ product, qty });
  }
  saveCart(items);
  return items;
};

export const updateCartQty = (productId: string, qty: number) => {
  const items = getCart()
    .map((item) => (item.product.id === productId ? { ...item, qty } : item))
    .filter((item) => item.qty > 0);
  saveCart(items);
  return items;
};

export const removeCartItem = (productId: string) => {
  const items = getCart().filter((item) => item.product.id !== productId);
  saveCart(items);
  return items;
};

export const clearCart = () => saveCart([]);

export const createOrder = (order: Order) => {
  const orders = [order, ...getOrders()];
  saveOrders(orders);
  return orders;
};

export const updateOrderStatus = (orderId: string, status: OrderStatus) => {
  const orders = getOrders().map((order) =>
    order.id === orderId ? { ...order, status } : order
  );
  saveOrders(orders);
  return orders;
};

export const updatePaymentStatus = (orderId: string, status: "paid" | "failed") => {
  const orders = getOrders().map((order) =>
    order.id === orderId ? { ...order, payment: { ...order.payment, status } } : order
  );
  saveOrders(orders);
  return orders;
};

export const useCartState = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const refresh = useCallback(() => {
    setItems(getCart());
  }, []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.qty, 0),
    [items]
  );

  return {
    items,
    total,
    refresh,
    add: (product: Product, qty = 1) => setItems(addToCart(product, qty)),
    updateQty: (productId: string, qty: number) => setItems(updateCartQty(productId, qty)),
    remove: (productId: string) => setItems(removeCartItem(productId)),
    clear: () => {
      clearCart();
      setItems([]);
    }
  };
};

export const useOrdersState = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  return {
    orders,
    refresh: () => setOrders(getOrders()),
    setStatus: (orderId: string, status: OrderStatus) =>
      setOrders(updateOrderStatus(orderId, status))
  };
};
