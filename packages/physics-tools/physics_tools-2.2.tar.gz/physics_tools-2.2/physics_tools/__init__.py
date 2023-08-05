import numpy as np
import sympy as sp

# --------------------------------------- Notatie -------------------------------
def SuperScript(number):
    number = str(number)
    return number.replace('0', '⁰').replace('1', '¹').replace('2', '²').replace('3', '³').replace('4', '⁴').replace('5', '⁵').replace('6', '⁶').replace('7', '⁷').replace('8', '⁸').replace('9', '⁹').replace('-', '⁻')


def sci_not(number, num_sig=2, decimal=','):
    if type(number) == str:
        number = float(number)
    ret_string = "{0:.{1:d}e}".format(number, num_sig-1)
    a, b = ret_string.split("e")
    a = a.replace('.', decimal)
    if b == str('+00'): return a 
    else:
        b = int(b)
        return a + "·10" + SuperScript(b)

def sci_axis(fig, num_sigx=2, num_sigy=2):
    fig.canvas.draw()
    ax = fig.axes[0]

    # Verkrijg oude labs
    xlabs = [item.get_text() for item in ax.get_xticklabels()]
    ylabs = [item.get_text() for item in ax.get_yticklabels()]
    
    # Maak nieuwe labs
    new_xlabs = [sci_not(lab.replace('\u2212', '-'), num_sigx) for lab in xlabs ]
    new_ylabs = [sci_not(lab.replace('\u2212', '-'), num_sigy) for lab in ylabs ]
    
    # Verander labs naar nieuwe labs
    ax.set_xticklabels(new_xlabs)
    ax.set_yticklabels(new_ylabs)
    
def dec_axis(fig, num_xdec=2, num_ydec=2):
    fig.canvas.draw()
    ax = fig.axes[0]

    # Verkrijg oude labs
    xlabs = [item.get_text() for item in ax.get_xticklabels()]
    ylabs = [item.get_text() for item in ax.get_yticklabels()]
    
    # Maak nieuwe labs
    xformat = '%0.0' + str(num_xdec) + 'f'
    yformat = '%0.0' + str(num_ydec) + 'f'
    new_xlabs =  [(xformat %float(lab.replace('\u2212', '-'))).replace('.', ',') for lab in xlabs]
    new_ylabs =  [(yformat %float(lab.replace('\u2212', '-'))).replace('.', ',') for lab in ylabs]
    
    # Verander labs naar nieuwe labs
    ax.set_xticklabels(new_xlabs)
    ax.set_yticklabels(new_ylabs)

# -------------------------------------Formules---------------------------------
def ev_to_joule(ev):
    return ev*1.602e-19

def joule_to_ev(joule):
    return joule/(1.602e-19)

def exp(number):
    return 2.71828182845904523536028747135266249**number

def root(number, macht=2):
    return number**(1/macht)

def power(number, macht=2):
    return number**macht

def deg(theta_rad):
    return theta_rad/c.pi * 180

def rad(theta_deg):
    return theta_deg/180 * c.pi

# --------------------------------------Constanten------------------------------------
class c: 
    '''Constanten die handig zijn bij natuurkundige berekeningen'''
    #Natuurconstante
    G = 6.67384*10**-11
    g = 9.81
    p_0 = 1.01325*10**5
    N_A = 6.02214129*10**23
    R = 8.3144621
    k = 1.3806488*10**-23
    sigma = 5.670373*10**-8
    h = 6.62606957*10**-34
    c = 2.99792458*10**8
    epsilon = 8.854187817*10**-12
    f = 8.987551787*10**9
    mu_0 = 1.25664*10**-6
    e = 1.602176565*10**-19
    F = 9.64853365*10**4
    a_0 = 5.2917721092*10**-11
    R_H = 1.096775834*10**7
    
    #Massa's
    m_e = 9.10938*10**-31
    m_p = 1.67262*10**-27
    m_n = 1.67493*10**-27
    
    #Overig
    pi = 3.14159265358979323846264338327950288
    inf = np.inf
    
# -------------------------------------------Matrixen-------------------------------
def setup_matrix_display():
  sp.init_printing(use_latex='mathjax') 
  from IPython.display import display

# Define 3d Vector function
def identiteit():
    return sp.Matrix([[1,0,0],[0,1,0],[0,0,1]])

def schalen(x,y):
    return sp.Matrix([[x,0,0],[0,y,0],[0,0,1]])

def roteren(theta):
    theta = theta/180*np.pi
    return sp.Matrix([[np.cos(theta), -np.sin(theta),0],[np.sin(theta), np.cos(theta),0],[0,0,1]])

def verplaatsen(x,y):
    return sp.Matrix([[1, 0, x], [0, 1, y], [0, 0, 1]])

def horizontaal_uitrekken(x):
    return sp.Matrix([[1,x,0],[0,1,0],[0,0,1]])

def verticaal_uitrekken(y):
    return sp.Matrix([[1,0,0],[y,1,0],[0,0,1]])

def spiegelx():
    return sp.Matrix([[-1,0,0],[0,1,0],[0,0,1]])

def spiegely():
    return sp.Matrix([[1,0,0],[0,-1,0],[0,0,1]])

def projecterenx():
    return sp.Matrix([[1,0,0],[0,0,0],[0,0,1]])

def projectereny():
    return sp.Matrix([[0,0,0],[0,1,0],[0,0,1]])

# Define optica matrixes
def translatie(L):
    return sp.Matrix([[1,L],[0,1]])

def refractie(n,na,R):
    return sp.Matrix([[1,0],[(n-na)/(R*na), n/na]])

def sferische_spiegel(R):
    return sp.Matrix([[1,0],[2/R,1]])

def dunne_lens(f):
    return sp.Matrix([[1,0],[-1/f,1]])

def dikke_lens(n, na, R1, R2, L):
    return refractie(na, n, R2)*translatie(L)*refractie(n, na, R1)
