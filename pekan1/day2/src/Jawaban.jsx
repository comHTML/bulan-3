import  ProfileCard from "./components/dailyTask/ProfileCard";
import  MathExpression from "./components/dailyTask/MathExpression";
import  ConditionalMessage from "./components/dailyTask/ConditionalMessage";
import  ListRenderer from "./components/dailyTask/ListRenderer";


function App() {
return (
<div className="p-6">
<ProfileCard
name="Raihan Nur"
photo="belom ad foto"
bio="pemula."
skills={[""]}
/>


<MathExpression />


<ConditionalMessage isLogin={true} pesan={3} />


<ListRenderer items={["Apel", "Jeruk", "Mangga", "Pisang"]} />
</div>
);
}

export default App;