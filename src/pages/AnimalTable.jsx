import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const animalData = [
  { name: "Lion", species: "Panthera leo", age: 8, habitat: "Savannah" },
  { name: "Elephant", species: "Loxodonta", age: 25, habitat: "Forest" },
  { name: "Penguin", species: "Aptenodytes forsteri", age: 15, habitat: "Antarctica" },
  { name: "Kangaroo", species: "Macropus", age: 12, habitat: "Grassland" },
  { name: "Panda", species: "Ailuropoda melanoleuca", age: 10, habitat: "Forest" },
];

const AnimalTable = () => {
  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableCaption>List of Animals</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Species</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Habitat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {animalData.map((animal, index) => (
            <TableRow key={index}>
              <TableCell>{animal.name}</TableCell>
              <TableCell>{animal.species}</TableCell>
              <TableCell>{animal.age}</TableCell>
              <TableCell>{animal.habitat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AnimalTable;