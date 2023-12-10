"use client"

import { Avatar, Badge, Button, Input } from "@nextui-org/react"
import { Add, ArrowDown2, Element, Notification, SearchNormal1, Trello } from "iconsax-react"
import HelpIcon from "../Icons"

function Header() {
  const listExpandButton = [{ title: "Workspaces" }, { title: "Recent" }, { title: "Starred" }, { title: "Templates" }]
  return (
    <header className="flex items-center justify-between px-2 h-header bg-colorHeader text-primary overflow-x-auto">
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <Element size={24} />
          <div className="flex items-center gap-2">
            <Trello size="24" color="#fff" variant="Bold" />
            <p className="text-xl font-bold">Trello</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-2">
          {listExpandButton.map((i) => (
            <ExpandButton title={i.title} key={i.title} />
          ))}
        </div>
        <Button className="flex items-center gap-2 text-primary" variant="bordered" startContent={<Add />}>
          Create
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search"
          autoComplete="off"
          startContent={<SearchNormal1 size={24} className="text-primary2" />}
          endContent={<Add size={16} className="rotate-45 text-primary2" />}
          classNames={{
            inputWrapper: "h-10",
          }}
          className="min-w-[120px]"
        />
        <Badge content="" shape="circle" color="danger" placement="top-right" size="sm">
          <Notification className="rotate-45" />
        </Badge>
        <HelpIcon className={"h-6 w-6 flex-shrink-0"} />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="h-6 w-6 flex-shrink-0" />
      </div>
    </header>
  )
}

const ExpandButton: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Button className="flex items-center gap-2 font-medium text-primary" variant="light" endContent={<ArrowDown2 size={16} />}>
      {title}
    </Button>
  )
}
export default Header
