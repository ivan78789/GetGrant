import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: 'Образование',
      links: [
        { name: 'Университеты', path: '/universities' },
        { name: 'Страны', path: '/countries' },
        { name: 'Программы', path: '/programs' },
        { name: 'Онлайн-подготовка', path: '/courses' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { name: 'О нас', path: '/' },
        { name: 'Наша команда', path: '/' },
        { name: 'Партнёры', path: '/' },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { name: 'FAQ', path: '/' },
        { name: 'Контакты', path: '/' },
        { name: 'Блог', path: '/' },
        { name: 'Документы', path: '/' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold text-white">GetGrant</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm text-sm leading-relaxed">
              Онлайн-сервис для подготовки и сопровождения поступления студентов
              9–11 классов за рубеж.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+996554123456"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+996 554 123 456</span>
              </a>
              <a
                href="mailto:info@getgrant.kg"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@getgrant.kg</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Бишкек, ул. Касыма Тыныстанова, 197/1</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 hover:text-primary transition-colors text-sm text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white transition-all duration-200">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 GetGrant. Все права защищены.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Лицензии
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-600 text-center md:text-left">
              Лицензия на образовательную деятельность № 240000733 от 01.01.2020
              | Свидетельство об аккредитации № 654321 от 15.03.2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
