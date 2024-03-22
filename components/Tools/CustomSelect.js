import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = ({
  listArr = [],
  value,
  handleChange,
  name,
  placeholder,
  selectLabel,
}) => {
  return (
    <Select
      value={value}
      onValueChange={(value) => handleChange({ name, value })}
    >
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder={placeholder || "Select one"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel || "Select one option"}</SelectLabel>
          {listArr?.map((obj) => {
            return (
              <SelectItem
                key={obj?.id}
                value={obj?.name}
                className="capitalize"
              >
                {obj?.name || "Default"}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
