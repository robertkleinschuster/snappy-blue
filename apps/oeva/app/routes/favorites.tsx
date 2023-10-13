import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Divider, Link} from "@nextui-org/react";

export default function Favorites() {
  return (
    <>
        <Card className="max-w-[400px] mx-auto my-5">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">OeVA</p>
                    <p className="text-small text-default-500">oeva.org</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Willkommen bei OeVA</p>
            </CardBody>
            <Divider/>
            <CardFooter className="flex flex-col">
                <Link
                    showAnchorIcon
                    href="/trains"
                >
                    Zuglauf abrufen
                </Link>
                <Link
                    showAnchorIcon
                    href="/departures"
                >
                    Abfahrten suchen
                </Link>
            </CardFooter>
        </Card>
    </>
  );
}
