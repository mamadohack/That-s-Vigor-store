"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";
 const Size =()=> {
    console.log("size rendered");
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sizes</SelectLabel>
          <SelectItem value="S">S</SelectItem>
          <SelectItem value="M">M</SelectItem>
          <SelectItem value="L">L</SelectItem>
          <SelectItem value="XL">XL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default memo(Size);
