import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Apply() {
    return (
        <div className="flex justify-center items-center h-full">
      <Card color="transparent" shadow={true} className="p-4">
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Team Name" />
            <Input size="lg" label="Team Id" />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" color="orange" fullWidth>
            Register
          </Button>
        </form>
      </Card>

      </div>
    );
  }