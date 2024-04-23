import { MdOutlineDeleteOutline } from "react-icons/md";

import { NextPage } from "next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {}

const Successalert: NextPage<Props> = ({}) => {
  return (
    <Alert>
      <MdOutlineDeleteOutline className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};

export default Successalert;
