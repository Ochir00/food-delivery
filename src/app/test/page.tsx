import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="">
        <button className="flex items-center h-[36px] text-black px-2 rounded-full border-[#EF4444] border-[1px]">
        <p>123</p>
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>Edit</ContextMenuItem>
        <ContextMenuItem inset>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
