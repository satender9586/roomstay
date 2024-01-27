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
import tabanalysis from "../../../assests/images/tabanalysis.png"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

const Content = () => {
    return (

        <div className="w-full flex flex-col justify-center items-center mt-6">
            <div className="w-full h-full lg:w-[1110px] md:w-[800px] sm:w-[700px]   ">
                <div className="flex flex-col gap-2 mb-20">
                    <div className="flex items-center gap-2">
                        <div>
                            <PaperPlaneIcon className="w-3 h-3" />
                        </div>
                        <div className="text-violet-700 font-bold text-sm">PEPPER CONTENT PLATFORM</div>
                    </div>
                    <div className=" md:text-3xl lg:text-4xl">The Content Marketing Platform for Bussiness Teams</div>
                </div>
                <Tabs defaultValue="strategise" className="w-full h-[600px] md:w-[800px] lg:w-[1100px] sm:w-[100%] flex flex-col justify-center items-center">
                    <TabsList className="grid lg:w-[93%] md:w-[95%] sm:w-[95%] bg-gray-100  grid-cols-5  ">
                        <TabsTrigger value="strategise">
                            <Image src={horseIcon} className="w-6 h-6 mr-2" />
                            Strategise
                        </TabsTrigger>

                        <TabsTrigger value="create">
                            <Image src={editIcon} className="w-5 h-5 mr-2" />
                            Create
                        </TabsTrigger>
                        <TabsTrigger value="manage">
                            <Image src={tabanalysis} className="w-5 h-5 mr-2" />
                            Manage</TabsTrigger>
                        <TabsTrigger value="distribute">Distribute</TabsTrigger>
                        <TabsTrigger value="analyse">Analyse</TabsTrigger>
                    </TabsList>


                    <TabsContent value="strategise">
                        <div className="m-3 ">
                            <Card>
                                <CardContent className="space-y-2 w-fill  p-10 flex flex-col justify-center items-center h-[540px] " style={{ backgroundColor: "#F6F1FD" }}>
                                    <div className="space-y-1   " >
                                        <div className="flex h-full items-center justify-center gap-3 " >
                                            <div className="flex-[0.45] p-2 w-[600px]">
                                                <div className="font-bold text-3xl "> Power your complete content lifecycle</div>
                                                <ul className=" list-disc text-lg font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                    <li >Data-driven strategy to create impactful content</li>
                                                    <li>Efficient oprations to scale content creation</li>
                                                    <li>Actionable Insights to improve performance</li>
                                                </ul>
                                                <div className="font-bold font-mono text-xl pt-4 text-violet-700 underline cursor-pointer">
                                                    Explore more
                                                </div>
                                            </div>
                                            <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                <Image src={bussinessAnalyst} className="lg:w-[90%]  md:w-[100%] lg:h-[90%] md:h-[260px] object-cover rounded-xl " />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="create">
                        <div className="m-3 ">
                            <Card>
                                <CardContent className="space-y-2 w-fill  p-10 flex flex-col justify-center items-center h-[540px] " style={{ backgroundColor: "#F6F1FD" }}>
                                    <div className="space-y-1   " >
                                        <div className="flex h-full items-center justify-center gap-3 " >
                                            <div className="flex-[0.45] p-2">
                                                <div className="font-bold text-3xl "> Create high-quality content, at scale</div>
                                                <ul className=" list-disc text-lg font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                    <li >Search-optimized content, by default
                                                    </li>
                                                    <li>AI-powered writing assistance</li>
                                                    <li>Automated content audits</li>
                                                </ul>
                                                <div className="font-bold font-mono text-xl pt-4 text-violet-700 underline cursor-pointer">
                                                    Explore more
                                                </div>
                                            </div>
                                            <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                <Image src={bussinessAnalyst} className="lg:w-[90%]  md:w-[100%] lg:h-[90%] md:h-[260px] object-cover rounded-xl " />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="manage">
                        <div className="m-3 ">
                            <Card>
                                <CardContent className="space-y-2 w-fill  p-10 flex flex-col justify-center items-center h-[540px] " style={{ backgroundColor: "#F6F1FD" }}>
                                    <div className="space-y-1   " >
                                        <div className="flex h-full items-center justify-center gap-3 " >
                                            <div className="flex-[0.45] p-2 w-[600px]">
                                                <div className="font-bold text-3xl  "> Workflows that streamline your content marketing</div>
                                                <ul className=" list-disc text-lg font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                    <li >Quick feedback and approval process
                                                    </li>
                                                    <li>Single-dashboard visibility of the content pipeline
                                                    </li>
                                                    <li>Efficient collaboration between teams
                                                    </li>
                                                </ul>
                                                <div className="font-bold font-mono text-xl pt-4 text-violet-700 underline cursor-pointer">
                                                    Explore more
                                                </div>
                                            </div>
                                            <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                <Image src={bussinessAnalyst} className="lg:w-[90%]  md:w-[100%] lg:h-[90%] md:h-[260px] object-cover rounded-xl " />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="distribute">
                        <div className="m-3 ">
                            <Card>
                                <CardContent className="space-y-2 w-fill  p-10 flex flex-col justify-center items-center h-[540px] " style={{ backgroundColor: "#F6F1FD" }}>
                                    <div className="space-y-1   " >
                                        <div className="flex h-full items-center justify-center gap-3 " >
                                            <div className="flex-[0.45] p-2 w-[600px]">
                                                <div className="font-bold text-3xl  "> Publish your content in a few clicks</div>
                                                <ul className=" list-disc text-lg font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                    <li >Integration with your preferred CMS
                                                    </li>
                                                    <li>Quick distribution to reach your audience</li>
                                                    <li>Hassle-free publishing with no additional formatting
                                                    </li>
                                                </ul>
                                                <div className="font-bold font-mono text-xl pt-4 text-violet-700 underline cursor-pointer">
                                                    Explore more
                                                </div>
                                            </div>
                                            <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                <Image src={bussinessAnalyst} className="lg:w-[90%]  md:w-[100%] lg:h-[90%] md:h-[260px] object-cover rounded-xl " />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="analyse">
                        <div className="m-3 ">
                            <Card>
                                <CardContent className="space-y-2 w-fill  p-10 flex flex-col justify-center items-center h-[540px] " style={{ backgroundColor: "#F6F1FD" }}>
                                    <div className="space-y-1   " >
                                        <div className="flex h-full items-center justify-center gap-3 " >
                                            <div className="flex-[0.45] p-2 w-[600px]">
                                                <div className="font-bold text-3xl "> Measure your content ROI</div>
                                                <ul className=" list-disc text-lg font-sans flex flex-col gap-2 mt-4 pl-7 ">
                                                    <li >Content audit for the complete website

                                                    </li>
                                                    <li>Keyword position tracking without spreadsheets
                                                    </li>
                                                    <li>Actionable insights to improve existing content
                                                    </li>
                                                </ul>
                                                <div className="font-bold font-mono text-xl pt-4 text-violet-700 underline cursor-pointer">
                                                    Explore more
                                                </div>
                                            </div>
                                            <div className="flex-[0.55] h-full flex flex-col items-center justify-center">
                                                <Image src={bussinessAnalyst} className="lg:w-[90%]  md:w-[100%] lg:h-[90%] md:h-[260px] object-cover rounded-xl " />
                                            </div>
                                        </div>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Content;

