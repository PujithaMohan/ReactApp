export default function TabButton({children,onClickEvent}){
    
return(
    <li>
        <button onClick={onClickEvent}>{children}</button>
    </li>
);
}
// export default function TabButton({label}){
//     return(
//         <li>
//             <button>{label}</button>
//         </li>
//     );
//     }