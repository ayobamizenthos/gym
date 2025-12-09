import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MagneticButton from "./MagneticButton";

const Tools = () => {
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const [calorieAge, setCalorieAge] = useState("");
  const [calorieWeight, setCalorieWeight] = useState("");
  const [calorieHeight, setCalorieHeight] = useState("");
  const [calorieGender, setCalorieGender] = useState("male");
  const [calorieResult, setCalorieResult] = useState<number | null>(null);

  const calculateBMI = () => {
    const weight = parseFloat(bmiWeight);
    const height = parseFloat(bmiHeight) / 100;
    if (weight && height) {
      const bmi = weight / (height * height);
      setBmiResult(parseFloat(bmi.toFixed(1)));
    }
  };

  const calculateCalories = () => {
    const weight = parseFloat(calorieWeight);
    const height = parseFloat(calorieHeight);
    const age = parseFloat(calorieAge);
    
    if (weight && height && age) {
      let bmr;
      if (calorieGender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      const tdee = bmr * 1.55;
      setCalorieResult(Math.round(tdee));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { text: "Underweight", color: "text-blue-400", bg: "from-blue-500/20 to-blue-600/20" };
    if (bmi < 25) return { text: "Optimal", color: "text-green-400", bg: "from-green-500/20 to-green-600/20" };
    if (bmi < 30) return { text: "Overweight", color: "text-amber-400", bg: "from-amber-500/20 to-amber-600/20" };
    return { text: "Obese", color: "text-red-400", bg: "from-red-500/20 to-red-600/20" };
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Precision Tools</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            FITNESS <span className="text-gradient-gold">TOOLS</span>
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Data-driven decisions. Precision tracking for optimal results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="bmi" className="w-full">
            <TabsList className="w-full h-auto p-2 glass-card rounded-2xl border border-border/50 mb-8">
              <div className="grid grid-cols-2 gap-2 w-full">
                <TabsTrigger
                  value="bmi"
                  className="py-4 md:py-5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-gold-dark data-[state=active]:text-primary-foreground transition-all duration-300 font-bold"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  BMI Calculator
                </TabsTrigger>
                <TabsTrigger
                  value="calories"
                  className="py-4 md:py-5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-gold-dark data-[state=active]:text-primary-foreground transition-all duration-300 font-bold"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Calorie Calculator
                </TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="bmi">
              <div className="glass-card rounded-3xl p-6 md:p-10 border border-border/50">
                <h3 className="text-2xl md:text-3xl font-display mb-6 md:mb-8">Body Mass Index Calculator</h3>
                
                <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Weight (kg)</label>
                    <Input
                      type="number"
                      placeholder="70"
                      value={bmiWeight}
                      onChange={(e) => setBmiWeight(e.target.value)}
                      className="h-14 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Height (cm)</label>
                    <Input
                      type="number"
                      placeholder="175"
                      value={bmiHeight}
                      onChange={(e) => setBmiHeight(e.target.value)}
                      className="h-14 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-lg"
                    />
                  </div>
                </div>

                <MagneticButton
                  onClick={calculateBMI}
                  className="w-full py-5 md:py-6 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-xl shadow-lg hover-glow-gold btn-premium"
                >
                  Calculate BMI
                </MagneticButton>

                {bmiResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 p-8 md:p-10 rounded-2xl bg-gradient-to-br ${getBMICategory(bmiResult).bg} border border-border/50 text-center`}
                  >
                    <div className="text-5xl md:text-7xl font-display text-gradient-gold mb-3">{bmiResult}</div>
                    <div className={`text-xl md:text-2xl font-bold ${getBMICategory(bmiResult).color}`}>
                      {getBMICategory(bmiResult).text}
                    </div>
                  </motion.div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="calories">
              <div className="glass-card rounded-3xl p-6 md:p-10 border border-border/50">
                <h3 className="text-2xl md:text-3xl font-display mb-6 md:mb-8">Daily Calorie Needs</h3>
                
                <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Age</label>
                    <Input
                      type="number"
                      placeholder="25"
                      value={calorieAge}
                      onChange={(e) => setCalorieAge(e.target.value)}
                      className="h-14 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Gender</label>
                    <select
                      value={calorieGender}
                      onChange={(e) => setCalorieGender(e.target.value)}
                      className="w-full h-14 px-4 rounded-xl bg-muted/30 border border-border/50 text-foreground text-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Weight (kg)</label>
                    <Input
                      type="number"
                      placeholder="70"
                      value={calorieWeight}
                      onChange={(e) => setCalorieWeight(e.target.value)}
                      className="h-14 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Height (cm)</label>
                    <Input
                      type="number"
                      placeholder="175"
                      value={calorieHeight}
                      onChange={(e) => setCalorieHeight(e.target.value)}
                      className="h-14 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-lg"
                    />
                  </div>
                </div>

                <MagneticButton
                  onClick={calculateCalories}
                  className="w-full py-5 md:py-6 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-xl shadow-lg hover-glow-gold btn-premium"
                >
                  Calculate Calories
                </MagneticButton>

                {calorieResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 text-center"
                  >
                    <div className="text-5xl md:text-7xl font-display text-gradient-gold mb-3">{calorieResult}</div>
                    <div className="text-xl md:text-2xl font-bold">Calories Per Day</div>
                    <p className="text-sm text-muted-foreground mt-2">Based on moderate activity level</p>
                  </motion.div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Referral Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-8 md:p-14 border border-primary/30 text-center">
                <div className="w-18 h-18 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                  <Award className="w-9 h-9 md:w-12 md:h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-4xl font-display mb-4">
                  Refer a Friend. Get <span className="text-gradient-gold">1 Week Free</span>
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm md:text-base">
                  Share the transformation. When your friend joins, you both win. Discipline is better together.
                </p>
                <MagneticButton
                  onClick={() => window.open("https://wa.me/2348000000000?text=I%20want%20to%20refer%20a%20friend%20to%206:45%20Fitness", "_blank")}
                  className="px-10 md:px-14 py-5 md:py-7 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-full shadow-lg hover-glow-gold group btn-premium"
                >
                  Refer Now
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
