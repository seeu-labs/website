import { Tool } from '.'

export function ToolItem(props: { value: Tool; group: string }) {
  return (
    <div
      onClick={() => {
        window.open(props.value.url, '_blank')
      }}
      className="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-[#1d1e1f] shadow-[0_4px_6px_-1px_rgba(0,0,0,1)]"
    >
      <img
        src={props.value.image}
        alt={props.value.image}
        className="h-full w-full flex-1 object-cover"
      />
      <div className="flex items-center justify-between p-[16px]">
        <div>{props.value.name}</div>
        {/* <Tag
          className="px-[8px] py-[4px] text-sm"
          color={colors[Math.floor(Math.random() * colors.length)]}
        >
          {props.group}
        </Tag> */}
      </div>
    </div>
  )
}
