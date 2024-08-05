import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TitlesAndOrnamentsListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3749;

	public titles: Array<number>;
	public ornaments: Array<number>;
	public activeTitle: number = 0;
	public activeOrnament: number = 0;

    public constructor()
    {
        super();
        this.titles = Array<number>();
        this.ornaments = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TitlesAndOrnamentsListMessage(input);
    }

    private deserializeAs_TitlesAndOrnamentsListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _titlesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _titlesLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of titles.");
            }
            this.titles.push(_val1);
        }
        let _ornamentsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _ornamentsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of ornaments.");
            }
            this.ornaments.push(_val2);
        }
        this._activeTitleFunc(input);
        this._activeOrnamentFunc(input);
    }

    private _activeTitleFunc(input: ICustomDataInput)
    {
        this.activeTitle = input.readVarUhShort();
        if(this.activeTitle < 0)
        {
            throw new Error("Forbidden value (" + this.activeTitle + ") on element of TitlesAndOrnamentsListMessage.activeTitle.");
        }
    }

    private _activeOrnamentFunc(input: ICustomDataInput)
    {
        this.activeOrnament = input.readVarUhShort();
        if(this.activeOrnament < 0)
        {
            throw new Error("Forbidden value (" + this.activeOrnament + ") on element of TitlesAndOrnamentsListMessage.activeOrnament.");
        }
    }

}