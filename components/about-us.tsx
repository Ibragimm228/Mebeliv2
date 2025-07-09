"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useRef, useEffect } from "react"
import * as THREE from "three"

const advantages = [
  "Собственное производство в Твери",
  "Качественные материалы от проверенных поставщиков",
  "Гарантия 2 года на всю мебель",
  "Бесплатная доставка по Твери от 10 000 ₽",
  "Индивидуальный подход к каждому клиенту",
  "Опыт работы на рынке Твери более 10 лет",
]

const vertexShader = `
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

float PI = 3.141592653589793238;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
}

float smin( float a, float b, float k ) {
    k *= 6.0;
    float h = max( k-abs(a-b), 0.0 )/k;
    return min(a,b) - h*h*h*k*(1.0/6.0);
}

float sphereSDF(vec3 p, float r) {
    return length(p) - r;
}

float sdf(vec3 p) {
    vec3 p1 = rotate(p, vec3(0.0, 0.0, 1.0), time/5.0);
    vec3 p2 = rotate(p, vec3(1.), -time/5.0);
    vec3 p3 = rotate(p, vec3(1., 1., 0.), -time/4.5);
    vec3 p4 = rotate(p, vec3(0., 1., 0.), -time/4.0);
    
    float final = sphereSDF(p1 - vec3(-0.5, 0.0, 0.0), 0.35);
    float nextSphere = sphereSDF(p2 - vec3(0.55, 0.0, 0.0), 0.3);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p2 - vec3(-0.8, 0.0, 0.0), 0.2);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p3 - vec3(1.0, 0.0, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p4 - vec3(0.45, -0.45, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1);
    
    return final;
}

vec3 getNormal(vec3 p) {
    float d = 0.001;
    return normalize(vec3(
        sdf(p + vec3(d, 0.0, 0.0)) - sdf(p - vec3(d, 0.0, 0.0)),
        sdf(p + vec3(0.0, d, 0.0)) - sdf(p - vec3(0.0, d, 0.0)),
        sdf(p + vec3(0.0, 0.0, d)) - sdf(p - vec3(0.0, 0.0, d))
    ));
}

float rayMarch(vec3 rayOrigin, vec3 ray) {
    float t = 0.0;
    for (int i = 0; i < 100; i++) {
        vec3 p = rayOrigin + ray * t;
        float d = sdf(p);
        if (d < 0.001) return t;
        t += d;
        if (t > 100.0) break;
    }
    return -1.0;
}

void main() {
    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
    vec3 cameraPos = vec3(0.0, 0.0, 5.0);
    vec3 ray = normalize(vec3((vUv - vec2(0.5)) * resolution.zw, -1));
    vec3 color = vec3(1.0);
    
    float t = rayMarch(cameraPos, ray);
    if (t > 0.0) {
        vec3 p = cameraPos + ray * t;
        vec3 normal = getNormal(p);
        float fresnel = pow(1.0 + dot(ray, normal), 3.0);
        
    
        vec3 lavaColor = mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.8, 0.2), fresnel);
        color = lavaColor * fresnel;
        
        gl_FragColor = vec4(color, 1.0);
    } else {
    
        gl_FragColor = vec4(0.02, 0.02, 0.02, 1.0);
    }
}
`;

function LavaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

  
    const scene = new THREE.Scene()
    sceneRef.current = scene


    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -1000, 1000)
    camera.position.set(0, 0, 2)

    
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer


    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() }
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    })
    materialRef.current = material

    const geometry = new THREE.PlaneGeometry(5, 5)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)


    const updateResolution = () => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      const imageAspect = 1
      let a1, a2
      
      if (h / w > imageAspect) {
        a1 = (w / h) * imageAspect
        a2 = 1
      } else {
        a1 = 1
        a2 = (h / w) / imageAspect
      }
      
      uniforms.resolution.value.set(w, h, a1, a2)
      renderer.setSize(w, h)
    }

    updateResolution()

    const clock = new THREE.Clock()
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      uniforms.time.value = elapsedTime
      
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()


    const handleResize = () => {
      updateResolution()
    }
    window.addEventListener('resize', handleResize)


    return () => {
      window.removeEventListener('resize', handleResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}

export default function AboutUs() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black">
      <LavaBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" style={{ zIndex: 2 }}></div>
      
      <div className="container px-4 md:px-6 relative" style={{ zIndex: 10 }}>
        <div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/о-нас.png?height=500&width=700"
              alt="Наше производство мебели в Твери"
              fill
              className="object-cover rounded-lg border border-orange-500/30 shadow-2xl"
              itemProp="image"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white" itemProp="name">
              О компании «Мебельщик Тверь»
            </h2>
            <div itemProp="description">
              <p className="text-gray-200 md:text-lg">
                Компания «Мебельщик Тверь» специализируется на производстве качественной мебели для дома и офиса в Твери
                и Тверской области. Мы работаем на рынке более 10 лет и за это время завоевали доверие тысяч клиентов.
              </p>
              <p className="text-gray-200 md:text-lg mt-4">
                Наша миссия — создавать комфортное пространство для жизни и работы жителей Твери и области, предлагая
                мебель, которая сочетает в себе функциональность, эстетику и доступную цену.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-2 group hover:bg-orange-500/10 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  <span className="text-white group-hover:text-orange-100 transition-colors duration-300">{advantage}</span>
                </div>
              ))}
            </div>
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="hidden">
              <meta itemProp="streetAddress" content="ул. Мебельная, д. 1" />
              <meta itemProp="addressLocality" content="Тверь" />
              <meta itemProp="addressRegion" content="Тверская область" />
              <meta itemProp="postalCode" content="170000" />
              <meta itemProp="addressCountry" content="RU" />
            </div>
            <meta itemProp="telephone" content="+74822123456" />
            <meta itemProp="email" content="mebelshik69@mail.ru" />
          </div>
        </div>
      </div>
    </section>
  )
}