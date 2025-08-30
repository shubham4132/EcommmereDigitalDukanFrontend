import { filterOptions } from "@/config";

import { Checkbox } from "components/ui/checkbox";
import { Label } from "components/ui/label";
import { Separator } from "components/ui/separator";
import { Fragment } from "react/jsx-runtime";

type FilterKey = keyof typeof filterOptions;
type Filters = Partial<Record<FilterKey, string[]>>;
type HandleFilter = (key: FilterKey, id: string) => void;

type Props = {
  filters: Filters;
  handleFilter: HandleFilter;
};

function ProductFilter({ filters, handleFilter }: Props) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {(Object.keys(filterOptions) as (keyof typeof filterOptions)[]).map(
          (keyItem) => (
            <Fragment key={keyItem}>
              <div>
                <h3 className="text-base font-bold">{keyItem}</h3>
                <div className="grid gap-2 mt-2">
                  {filterOptions[keyItem].map((option) => (
                    <Label
                      key={option.id}
                      className="flex font-medium items-center gap-2 "
                    >
                      <Checkbox
                        checked={
                          filters &&
                          Object.keys(filters).length > 0 &&
                          filters[keyItem] &&
                          filters[keyItem].indexOf(option.id) > -1
                        }
                        onCheckedChange={() => handleFilter(keyItem, option.id)}
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
              <Separator />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}
export default ProductFilter;
