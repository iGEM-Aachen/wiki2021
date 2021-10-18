function Regression

function C=kinetics(theta,t)
c0=[0.00000002;0;0];
[T,Cv]=ode45(@DifEq,t,c0);

%
    function dC=DifEq(t,c)
    dcdt=zeros(3,1);
    dcdt(1)=-theta(1)*c(1)*(1.5*10^-4)/(theta(2)*theta(3)+theta(2)*(1.5*10^-4)+theta(3)*c(1)+c(1)*(1.5*10^-4));
    dcdt(2)= theta(1)*c(1)*(1.5*10^-4)/(theta(2)*theta(3)+theta(2)*(1.5*10^-4)+theta(3)*c(1)+c(1)*(1.5*10^-4))-(theta(1)*c(2)*(1.5*10^-4)/(theta(2)*theta(3)+theta(2)*c(2)+theta(3)*(1.5*10^-4)+c(2)*(1.5*10^-4)));
    dcdt(3)= theta(1)*c(2)*(1.5*10^-4)/(theta(2)*theta(3)+theta(2)*(1.5*10^-4)+theta(3)*c(2)+c(2)*(1.5*10^-4))-(theta(1)*c(3)*(1.5*10^-4)/(theta(2)*theta(3)+theta(2)*c(3)+theta(3)*c(3)+c(3)*(1.5*10^-4)));
    dC=dcdt;
    end
C=Cv;
end



t=[0
7.5
15
20
30
60
90
];

c=[0.00000002 0 0
2.84816E-09	9.49015E-09	2.47753E-09	
1.17539E-09	4.61593E-09	3.69123E-09	
1.69079E-10	2.94275E-09	1.98704E-09	
9.58541E-11	1.07571E-09	7.67953E-10	
2.2629E-11	7.24638E-11	3.61048E-11	
4.00516E-11	2.4031E-11	3.38214E-11	
]; 


DNA0=[0.00000002 2.84816E-09 1.17539E-09 1.69079E-10 9.58541E-11 2.2629E-11 4.00516E-11];
DNA1=[0 9.49015E-09 4.61593E-09 2.94275E-09 1.07571E-09 7.24638E-11 2.4031E-11];
DNA2=[0 2.47753E-09 3.69123E-09 1.98704E-09 7.67953E-10 3.61048E-11 3.38214E-11];
    

theta0=[0.0000083;0.001;0.0001];
ub = [ ];
lb = [0 0 0 ];
% Solveroptionen
solver_options = optimoptions('lsqcurvefit','TolX',1e-80,'TolFun',1e-80,'MaxIter',100000,'MaxFunEvals',10000);

[theta,Rsdnrm,Rsd,ExFlg,OptmInfo,Lmda,Jmat]=lsqcurvefit(@kinetics,theta0,t,c,lb,ub,solver_options);

fprintf(1,'\tRate Constants:\n')
for k1 = 1:length(theta)
    fprintf(1, '\t\tTheta(%d) = %8.8f\n', k1, theta(k1))
end

tv = linspace(min(t), max(t));
Cfit = kinetics(theta, tv);

figure;
newcolors = [1 0 0
             0 1 0
             0 0 1];
         
colororder(newcolors)
plot(t, DNA0, 'r*');
hold on
plot(t, DNA1, 'g*');
hold on
plot(t, DNA2, 'b*');
hold on
hlp = plot(tv, Cfit);
hold off
grid
xlabel('Time')
ylabel('Concentration')
legend(hlp, 'DNA0', 'DNA1', 'DNA2', 'Location','N')

end