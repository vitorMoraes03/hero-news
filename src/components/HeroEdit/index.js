import { useState, useEffect } from "react";
import axios from "axios";

// EDITAR ANUNCIO

export function HeroEdit(){

        const [form, setForm] = useState({
            name: "",
            age: 30,
            skills: [],
            where: "",
            time: "",
            payment: "nap",
            msg: "",
        })

        useEffect(() => {
            fetchHero();
            async function fetchHero() {
                try {
                    // const response = await axios.get(`https://ironrest.cyclic.app/hero-news/ver-anuncio/${params.id}`);
                    // MODO TESTE 
                    const response = await axios.get(`https://ironrest.cyclic.app/hero-news/637d39baefd1e40027121ade`);
                    console.log(response.data);
                    setForm(response.data)
                } catch (err) {
                    console.log(err)
                }
            }
        }, [])
    
        const [skill, setSkill] = useState("");
    
        function handleChange(event) {
            setForm({ ...form, [event.target.name]: event.target.value })
        }
    
        async function handleSubmitChange(event) {
            event.preventDefault();
            try {
                const res = await axios.put("https://ironrest.cyclic.app/hero-news/637d39baefd1e40027121ade", {
                    name: form.name,
                    age: form.age,
                    skills: form.skills,
                    where: form.where,
                    time: form.time,
                    payment: form.payment,
                    msg: form.msg,
                });
                console.log(res);
                // setForm({
                //     name: "",
                //     age: 30,
                //     skills: [],
                //     where: "",
                //     time: "",
                //     payment: "nap",
                //     msg: "",
                // })
            } catch (err) {
                console.log(err);
            }
        }
        
        function handleSkillInput(){
            if(form.skills.includes(skill) || skill === ''){
            return {...form}
            }
            return {...form, skills: [...form.skills, skill]};
        }
        
        return (
            
            <form>
                {/* NAME */}
                <div>
                <label htmlFor="inputName">Nome: </label>
                <input
                    id="inputName"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    placeholder="Digite seu nome de heroi"
                    required
                />
                </div>
    
                {/* AGE */}
                <div>
                <label htmlFor="input-age">Idade: </label>
                <input
                    type='number'
                    id='input-age'
                    name='age'
                    onChange={handleChange}
                    value={form.age}
                ></input>
                </div>
    
                {/* WHERE */}
                <div>
                <label htmlFor="input-where">Onde: </label>
                <input
                    type='text'
                    id='input-where'
                    name='where'
                    onChange={handleChange}
                    value={form.where}
                    required
                ></input>
                </div>
    
                {/* SKILLS*/}
                <div>
                <label htmlFor="inputSkills">
                    Quais suas habilidades?{" "}
                </label>
                <input
                    id="inputSkills"
                    type="text"
                    name="skills"
                    value={skill}
                    placeholder="Suas skills de heroi..."
                    // REMOVED ENTER, CONFLICT WITH SUBMIT BTN
                    onKeyDown={(event) => event.key === 'Enter' ? 
                        (
                        setForm(handleSkillInput()),
                        setSkill('')
                        )
                        : null
                    }
                    onChange={(event) => {
                        setSkill(event.target.value);
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        setForm(handleSkillInput());
                        setSkill('');
                    }}
                >
                    Adicionar
                </button>
                <br />
                {form.skills.map((currentSkill) => (
                    <div key={`${form.name}-${currentSkill}`}>
                        <strong>{currentSkill}</strong>
                        <button
                            type="button"
                            onClick={() => {
                                setForm({...form, skills: form.skills.filter(element => element !== currentSkill)});   
                            }}
                        >
                            Remover
                        </button>
                    </div>
                ))}
                </div>
            
                {/* TIME*/} 
                <div>
                <label htmlFor="input-time">Horário: </label>            
                <select
                    id='input-time'
                    name='time'
                    onChange={handleChange}
                    defaultValue={form.time}
                >   
                    
                    <option value="day">Diurno</option>
                    <option value="night">Noturno</option>
                    <option value="full-day">24h</option>
                </select>
                </div>
    
                {/* PAYMENT*/}
                <div>
                <label>Forma de pagamento: </label>
                
                <input
                    id="input-payment-pix"
                    type="radio"
                    name="payment"
                    value="pix"
                    onChange={handleChange}
                    checked={form.payment === "pix"}
                />
                <label htmlFor="input-payment-pix">Pix</label>
                <input
                    id="input-payment-credCard"
                    type="radio"
                    name="payment"
                    value="credCard"
                    onChange={handleChange}
                    checked={form.payment === "credCard"}
                />
                <label htmlFor="input-payment-credCard">Cred-Card</label>
                <input
                    id="input-payment-nap"
                    type="radio"
                    name="payment"
                    value="nap"
                    onChange={handleChange}
                    checked={form.payment === "nap"}
                />
                <label htmlFor="input-payment-nap">Não Aceita Pagamento</label>
                </div>
    
                {/* MSG ADD*/} 
                <div>             
                <label htmlFor="inputMsg">Crie sua mensagem: </label>
                <input
                    id="inputMsg"
                    type="text"
                    name="msg"
                    onChange={handleChange}
                    value={form.msg}
                    maxLength={99}
                    required
                />
                </div> 
    
                <button type="button" onClick={handleSubmitChange}>Enviar</button>
            </form>
        )
    }




 