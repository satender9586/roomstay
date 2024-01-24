import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import horseIcon from "../../../assests/Icons/horse.png"
import editIcon from "../../../assests/Icons/editpen.png"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

const Content = () => {
    return (
        <Tabs defaultValue="strategise" className="w-[700px]">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="strategise">
                    <Image src={horseIcon} className="w-6 h-6 mr-2" />
                    Strategise
                </TabsTrigger>

                <TabsTrigger value="create">
                    <Image src={editIcon} className="w-5 h-5 mr-2" />
                    Create
                </TabsTrigger>
                <TabsTrigger value="manage">Manage</TabsTrigger>
                <TabsTrigger value="distribute">Distribute</TabsTrigger>
                <TabsTrigger value="analyse">Analyse</TabsTrigger>
            </TabsList>
            <TabsContent value="strategise">
                <Card>
                    <CardHeader>
                        <CardTitle>Account </CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when you're done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            {/* <Label htmlFor="name">Name</Label> */}
                            {/* <Input id="name" defaultValue="Pedro Duarte" /> */}
                        </div>
                        <div className="space-y-1">
                            {/* <Label htmlFor="username">Username</Label> */}
                            {/* <Input id="username" defaultValue="@peduarte" /> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="create">
                <Card>
                    <CardHeader>
                        <CardTitle>Create</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            {/* <Label htmlFor="current">Current password</Label> */}
                            {/* <Input id="current" type="password" /> */}
                        </div>
                        <div className="space-y-1">
                            {/* <Label htmlFor="new">New password</Label> */}
                            {/* <Input id="new" type="password" /> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="manage">
                <Card>
                    <CardHeader>
                        <CardTitle>Manage</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            {/* <Label htmlFor="current">Current password</Label> */}
                            {/* <Input id="current" type="password" /> */}
                        </div>
                        <div className="space-y-1">
                            {/* <Label htmlFor="new">New password</Label> */}
                            {/* <Input id="new" type="password" /> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="distribute">
                <Card>
                    <CardHeader>
                        <CardTitle>Distribute</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            {/* <Label htmlFor="current">Current password</Label> */}
                            {/* <Input id="current" type="password" /> */}
                        </div>
                        <div className="space-y-1">
                            {/* <Label htmlFor="new">New password</Label> */}
                            {/* <Input id="new" type="password" /> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="analyse">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            {/* <Label htmlFor="current">Current password</Label> */}
                            {/* <Input id="current" type="password" /> */}
                        </div>
                        <div className="space-y-1">
                            {/* <Label htmlFor="new">New password</Label> */}
                            {/* <Input id="new" type="password" /> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default Content;

