import { Button } from "@/components/ui/button"
import Image from "next/image"
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
import bussinessAnalyst from "../../../assests/images/bussinessanalyst.jpg"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

const Content = () => {
    return (

        <div className="w-[100%] flex flex-col items-center">
            <div className="w-[700px]">
                <div className="flex flex-col gap-2 mb-20">
                    <div className="flex items-center gap-2">
                        <div>
                            <PaperPlaneIcon className="w-3 h-3" />
                        </div>
                        <div className="text-violet-700 font-bold text-sm">PEPPER CONTENT PLATFORM</div>
                    </div>
                    <div className=" text-4xl">The Content Marketing Platform for Bussiness Teams</div>
                </div>
                <Tabs defaultValue="strategise" className="w-full">
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
                        <div className="m-3">
                            <Card>
                                <CardContent className="space-y-2 p-0 w-full">
                                    <div className="space-y-1">
                                        <div className="h-[300px] w-full p-2" style={{ backgroundColor: "#F6F1FD" }}>
                                            <div className="flex h-full items-center justify-center gap-3">
                                                <div className="flex-[0.45] p-2">
                                                    <div className="font-bold text-xl font-mono"> Power your complete content lifecycle</div>
                                                    <ul className=" list-disc text-xs font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                        <li >Data-driven strategy to create impactful content</li>
                                                        <li>Efficient oprations to scale content creation</li>
                                                        <li>Actionable Insights to improve performance</li>
                                                    </ul>
                                                    <div className="font-bold font-mono text-sm pt-4 text-violet-700 underline cursor-pointer">
                                                        Explore more
                                                    </div>
                                                </div>
                                                <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                    <Image src={bussinessAnalyst} className="w-[280px] h-[240px] object-cover rounded-xl" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
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
            </div>
        </div>
    )
}

export default Content;

