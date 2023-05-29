import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
  } from "@material-tailwind/react";
  import {Avatar} from '../index'
   
  export default function Example() {
    return (
      <Card className="mt-6 w-full hover:border-blue-600">
        <CardBody>

        <div className="flex flex-col space-y-5">
            <div className="flex flex-col justify-between">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Badminton Intra College
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    <p className="border p-1 px-3 text-sm text-blue-500 bg-gray-50 rounded-xl w-fit">Pune Institute of Computer Technology</p>
                    </Typography>
                <div>
                <Tooltip content="Like">
                <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                >
                    <i className="fab fa-facebook" />
                </Typography>
                </Tooltip>
            <Tooltip content="Follow">
            <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
            >
                <i className="fab fa-twitter" />
            </Typography>
            </Tooltip>
            <Tooltip content="Follow">
            <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
            >
                <i className="fab fa-instagram" />
            </Typography>
            </Tooltip>
            </div>
        </div>

            <div>
                <Typography>
                    The Badminton is a sport which is either played between two teams or people
                </Typography>
            </div>
            <div className="flex flex-end space-x-4  items-center justify-between">

                <p className="border  p-1 px-3 rounded-2xl text-gray-600 bg-gray-100">No restrictions</p>
                <div className="flex flex-row items-center space-x-1">
                <Avatar/>
                <p className="font-bold text-green-600">+500 participated</p>
                </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0 flex flex-row justify-between items-end">
        <div className="flex flex-row space-x-3">
        
        <p className="border  p-1 px-3 rounded-2xl text-gray-600 bg-gray-100">Offline</p>
        <p className="border  p-1 px-3 rounded-2xl text-gray-600 bg-gray-100">Ongoing</p>
        </div>
          <Button>Register Now</Button>
        </CardFooter>

      </Card>
    );
  }