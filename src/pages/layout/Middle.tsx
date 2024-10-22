import React from "react";
import { Link, useLocation } from "react-router-dom";
import Middle_Bar from "../../components/Middle_Bar";
const activeColor = "#00A6FF";

const Middle: React.FC = (props) => {
  const urls = useLocation().pathname;
  return (
    <div className="py-2 w-full flex justify-between">
      <Middle_Bar
        link="/search"
        text="SEARCH"
        path="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6 M11.412 8.586c.379.38.588.882.588 1.414h2a3.98 3.98 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002"
      />
      <Middle_Bar
        link="/start"
        text="START"
        path="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11c.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637c.47.546 1.159-.026 1.214-.744c.018-.226.246-.37.442-.256c.641.375 1.46 1.175 1.46 2.473c0 2.048-1.129 2.99-2.168 3.357"
      />
      <Middle_Bar
        link="/new"
        text="NEW"
        path="M88.558 49.96c0-.885-.435-1.663-1.097-2.151l.014-.024l-9.324-5.383l5.367-9.296l-.018-.011a2.67 2.67 0 0 0-.127-2.408a2.67 2.67 0 0 0-2.025-1.314v-.026H70.58V18.61h-.022a2.67 2.67 0 0 0-1.314-2.022a2.66 2.66 0 0 0-2.412-.125l-.013-.023l-9.481 5.474l-5.25-9.094l-.019.011a2.67 2.67 0 0 0-2.149-1.094c-.885 0-1.664.435-2.151 1.097l-.024-.014l-5.337 9.244l-9.19-5.306l-.011.019a2.67 2.67 0 0 0-2.408.127a2.67 2.67 0 0 0-1.315 2.025h-.027v10.674H18.845v.021a2.67 2.67 0 0 0-2.022 1.314a2.67 2.67 0 0 0-.126 2.41l-.023.014l5.246 9.087l-9.394 5.424l.011.019a2.67 2.67 0 0 0-1.094 2.149c0 .885.435 1.664 1.097 2.151l-.014.024l9.324 5.383l-5.367 9.296l.018.01a2.67 2.67 0 0 0 .127 2.408a2.67 2.67 0 0 0 2.025 1.314v.027H29.42V81.39h.022c.092.816.549 1.58 1.314 2.022a2.67 2.67 0 0 0 2.412.125l.013.023l9.481-5.474l5.25 9.094l.019-.011a2.67 2.67 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013l5.337-9.244l9.191 5.306l.011-.019a2.67 2.67 0 0 0 2.408-.127a2.67 2.67 0 0 0 1.315-2.025h.027V70.398h10.613v-.021a2.67 2.67 0 0 0 2.022-1.314a2.67 2.67 0 0 0 .126-2.411l.023-.013l-5.246-9.087l9.394-5.424l-.011-.019a2.67 2.67 0 0 0 1.094-2.149M43.715 61.355l-9.846-4.35l4.345 7.525l-2.456 1.418l-6.662-11.537l2.525-1.459l9.53 4.162l-4.185-7.248l2.457-1.418l6.66 11.537zm4.652-2.686l-6.661-11.538l8.165-4.713l1.248 2.162l-5.709 3.295l1.398 2.422l5.587-3.225l1.248 2.16l-5.587 3.227l1.518 2.629l5.709-3.295l1.248 2.162zm18.906-10.915L60.675 41l2.567 9.08l-2.611 1.508l-9.965-9.629l2.75-1.588l6.838 7.168l-2.617-9.605l1.92-1.108l6.993 7.079l-2.79-9.506l2.75-1.588l3.375 13.436z"
      />
      <Middle_Bar
        link="/slots"
        text="SLOTS"
        path="m5 12l2-4V7H4v1h2l-2 4m5 0l2-4V7H8v1h2l-2 4m5 0l2-4V7h-3v1h2l-2 4m9-10c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7V17h-3v-2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-3.8c-.8-1.2-2.2-2-3.7-2s-2.9.8-3.7 2H2c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1v7h15v-3h3c1.1 0 2-.9 2-2V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2m-8 17H6v-2h7zm3-6H3V6h13z"
      />
      <Middle_Bar
        link="/live"
        text="LIVE"
        path="M11.94 3A3.993 3.993 0 0 0 8 7c-.06 1.64-.19 3.47-.97 4.59C9.71 13.22 12 13 12 13s2.29.22 4.97-1.41C16.12 10.22 15.94 8.54 16 7c0-2.21-1.79-4-4-4zM8.86 13.32C6 13.93 4 15.35 4 17v4h8l-3-4H6.5m5.5 4l1.78-7.19S13 14 12 14s-1.78-.19-1.78-.19M12 21h8v-4c0-1.65-2-3.07-4.86-3.68L17.5 17H15Z"
      />
      <Middle_Bar
        link="/jackpots"
        text="JACKPOTS"
        path="m5 12l2-4V7H4v1h2l-2 4m5 0l2-4V7H8v1h2l-2 4m5 0l2-4V7h-3v1h2l-2 4m9-10c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7V17h-3v-2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-3.8c-.8-1.2-2.2-2-3.7-2s-2.9.8-3.7 2H2c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1v7h15v-3h3c1.1 0 2-.9 2-2V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2m-8 17H6v-2h7zm3-6H3V6h13z"
      />
    </div>
  );
};

export default Middle;