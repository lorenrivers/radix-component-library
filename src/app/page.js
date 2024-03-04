"use client";
import UseCheckbox from "@/components/UseCheckbox";
import SwitchDemo from "@/components/ToggleButton";
import ToastDemo from "@/components/ToastPopUp";
import MenubarDemo from "@/components/UseMenuBar";

export default function Home() {
  return (
    <div>
      <h1>Using Radix Components </h1>
      <h2>Checkbox</h2>
      <UseCheckbox />
      <h2>Toggle/Switch Button</h2>
      <SwitchDemo />
      <h2>Toast</h2>
      <ToastDemo />
      <h2>Menu Bar</h2>
      <MenubarDemo />
    </div>
  );
}
