import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import web from "./book.png"; 
  export function  Bk({book,update}) {
    const id = book.id;
    return (
      <Card className="mt-1 w-80 border border-black">
        <CardHeader color="blue-gray" className="relative h-45">
          <img
          // https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80
            src={web}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="p-4 h-[160px]">
          <Typography variant="h5" color="blue-gray" className="mb-2">
          {book.bkname}
          </Typography>
          <Typography> 
          {book.semester},{book.subject} ,
          {book.condi} 
          </Typography>
          <p>${book.price}</p>
        </CardBody>
   
      </Card>
    );
  }