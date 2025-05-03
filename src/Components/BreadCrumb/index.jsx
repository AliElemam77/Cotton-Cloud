import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";

export default function index() {
    return (
        <div className="flex flex-col  gap-y-3">
            <h1 className="breadcrumb-header">ارواب ومناشف</h1>
            <Breadcrumbs
                itemClasses={{
                    separator: "px-2 breadcrumb-link",
                }}
                separator="/"
            >
                <BreadcrumbItem><span className="breadcrumb-link">الرئيسية</span></BreadcrumbItem>
                <BreadcrumbItem ><span className="breadcrumb-current">فئة ارواب و مناشف</span></BreadcrumbItem>
            </Breadcrumbs>
        </div>

    );
}